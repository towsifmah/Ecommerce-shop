import React from 'react'
import { Link } from 'react-router-dom'

const Login = ({openSingup}) => {
  return (
    <div>
        <h2 className='font-poppins text-2xl font-bold mb-4'>Login</h2>
        <form>
            <div className='mb-4'>
                <label className='block text-gray-700 font-poppins' htmlFor="">Emial</label>
                <input type="email"  placeholder='Enter your Email' className='w-full px-3 py-2 border font-poppins placeholder:font-poppins'/>
            </div>
            <div className='mb-4'>
                <label className='block text-gray-700 font-poppins' htmlFor="">Password</label>
                <input type="password"  placeholder='Password' className='w-full px-3 py-2 border font-poppins placeholder:font-poppins'/>
            </div>
            <div className='mb-4 flex items-center justify-between'>
                <label className='inline-flex items-center' htmlFor="">
                <input type="checkbox"  className='form-checkbox'/>
                <span className='ml-2 text-gray-700 font-poppins'>Remember Me</span>
                </label>
                <Link className='text-red-800'>Forgot Password</Link>
            </div>
            <div className='mb-4'>
                <button type='submit' className='w-full bg-red-600 text-white py-2 font-poppins font-medium'>Login</button>
            </div>
        </form>
        <div className='text-center'>
            <span className='text-gray-700 font-poppins font-normal'>Don't have an account</span>
            <button className='text-red-800' onClick={openSingup}>Sing Up</button>
        </div>
    </div>
  )
}

export default Login