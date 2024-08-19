import React from 'react'

const Ragistration = ({openLogin}) => {
  return (
    <div>
    <h2 className='font-poppins text-2xl font-bold mb-4'>Registration</h2>
    <form>
        <div className='mb-4'>
            <label className='block text-gray-700 font-poppins' htmlFor="">Sign Up</label>
            <input type="text"  placeholder='Your Name' className='w-full px-3 py-2 border font-poppins placeholder:font-poppins'/>
        </div>
        <div className='mb-4'>
            <label className='block text-gray-700 font-poppins' htmlFor="">Emial</label>
            <input type="email"  placeholder='Enter your Email' className='w-full px-3 py-2 border font-poppins placeholder:font-poppins'/>
        </div>
        <div className='mb-4'>
            <label className='block text-gray-700 font-poppins' htmlFor="">Password</label>
            <input type="password"  placeholder='Password' className='w-full px-3 py-2 border font-poppins placeholder:font-poppins'/>
        </div>
        <div className='mb-4'>
            <button type='submit' className='w-full bg-red-600 text-white py-2 font-poppins font-medium'>Sign Up</button>
        </div>
    </form>
    <div className='text-center'>
        <span className='text-gray-700 font-poppins font-normal'>Already have an account</span>
        <button className='text-red-800' onClick={openLogin}>Login</button>
    </div>
</div>
  )
}

export default Ragistration