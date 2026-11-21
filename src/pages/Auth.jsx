import React, { useState } from 'react'
import { FaEye, FaEyeSlash, FaUserAlt } from 'react-icons/fa'
import { Link, useNavigate, useRouteLoaderData } from 'react-router-dom'
import { Formik, useFormik } from 'formik'
import * as Yup from 'yup';
import { loginAPI, registerAPI } from '../service/allAPI';
import { ToastContainer, toast } from 'react-toastify';


function Auth({insideRegister}) {
  const navigate = useNavigate()
  const[togglePassword,setTogglePassword]=useState(false)

const formik =  useFormik({
  initialValues:{
    username : "Username",
    email: "",
    password :""
  },
  validationSchema : Yup.object({
    username:Yup.string().min(3,"must Be atleast  3 characters").required("Required"),
   email:Yup.string().email("invalid email").required("Required"),
     password:Yup.string().required("Required")
  }),
  onSubmit:(values,{resetForm})=>{
    console.log(values);
    if(insideRegister){
      console.log("Register API CALL");
      handleRegister(values)
    }else{
      console.log("Login API CALL");
      handleLogin(values)  
    }
    resetForm()
  }
})


const handleLogin = async (userData)=>{
  const result = await loginAPI (userData)
  console.log(result);
  if(result.status==200){
    toast.success("successfully Logged in...!!!")
    sessionStorage.setItem("token",result.data.token)
    sessionStorage.setItem("user",JSON.stringify(result.data.user))
    setTimeout(()=>{
      if(result.data.user.role=="admin"){
        navigate('/admin')
      }else{
        navigate('/')
      }
    },2500)
  }else{
    toast.error(result)
  } 
}

const handleRegister = async (userData)=>{
  const result = await registerAPI(userData)
  console.log(result);
  if(result.status==201){
    toast.success("successfully Registered Please Login!!!")
  }else{
    toast.error(result)
  }
  navigate("/login")
}


  return (
    <div className=' w-full h-screen flex justify-center items-center bg-[url(/Coverless.jpg)] bg-cover bg-center text-white '>
      <div className='p-10'>
        <h1 className=' text-center font-bold text-3xl text-[#D98C3F]'>BOOKSTORE</h1>
        <div style={{width:'400px'}} className=' bg-black text-white p-5 flex justify-center items-center flex-col my-5 rounded-xl shadow-2xl'>
          <div style={{width:'80px',height:'80px',borderRadius:'50%'}} className='border mb-5 flex justify-center items-center' >
           <FaUserAlt className='text-3xl'/>
          </div>
          <h1 className='3xl'>{insideRegister? "Register":"Login"}</h1>
          <form onSubmit={formik.handleSubmit} className='my-5 w-full'>
            {/* username */}
            {
              insideRegister &&
              <>
              <input name='username' value={formik.values.username} onChange={formik.handleChange} className='bg-white p-2 w-full rounded my-5 text-black' type='text'
              placeholder='UserName' />
              <div className='mb-5 text-yellow-400'>{formik.errors.username}</div>
              </>
            }
            {/* email */}
            <input name='email' value={formik.values.email} onChange={formik.handleChange} className='bg-white p-2 w-full rounded my-5 text-black' type='text'
              placeholder='E mail' />
               <div className='mb-5 text-yellow-400'>{formik.errors.email}</div>

            {/* password */}
           <div className='flex items-center'>
             <input name='password' value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur}  className='bg-white p-2 w-full rounded my-5 text-black' type={togglePassword?"text":'password'} placeholder='Password' />
              {
                togglePassword?
                 <FaEyeSlash onClick={()=>setTogglePassword(!togglePassword)} className='text-orange-400 cursor-pointer ' style={{marginTop:'-3px',marginLeft:'-30px'}}/>
                 :
              <FaEye  onClick={()=>setTogglePassword(!togglePassword)} className='text-orange-400 cursor-pointer ' style={{marginTop:'-3px',marginLeft:'-30px'}}/>
              }
           </div>
           {/* forgot password */}
           <div className='flex justify-between mb-5'>
            <p className='text-xs text-orange-300'>*Never Share Your Password </p>
            {
              !insideRegister && 
              <button className='text-xs underline'>Forgot Password</button>
            }
           </div>
            {/* login/ register button */}
            <div className='text-center'>
              {
                insideRegister?
                <button type='submit' className='bg-yellow-500 p-2 w-full rounded'>Register</button>
                :
                <button type='submit' className='bg-yellow-500 p-2 w-full rounded'>Login</button>
              }
            </div>

            {/* google login */}
             {
              !insideRegister &&
              <div className='text-center my-5'>
                <p>-----------------------or---------------------------</p>
               <div className='mt-2 flex justify-center items-center w-full'> 
                Google Authentication
                </div>
              </div>
             }
             {/* new/already */}
             <div className='text-center my-5'>
              {
                insideRegister?
                <p className='text-white'>Existing User?<Link to={'/login'} className='underline ms-5'>Login</Link></p>
                :
                <p className='text-white'>New User?<Link to={'/register'} className='underline ms-5'>Register</Link></p>
              }
             </div>
          </form>
        </div>
      </div>
         {/* toast container */}
         <ToastContainer position='top-center' theme='colored' autoClose={3000} />
    </div>
  )
}

export default Auth