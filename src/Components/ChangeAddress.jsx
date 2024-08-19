import React, { useState } from 'react'

const ChangeAddress = ({setAddress , setismodelOpen}) => {
  const [newAddress , setnewAddress] = useState("")
  const onClose = () =>{
    setAddress(newAddress)
    setismodelOpen(false)
  }
  return (
    <div>
        <input onChange={(e) =>setnewAddress(e.target.value)} type="text"  placeholder='Enter new address' className='border p-2 w-full mb-4 font-poppins placeholder:font-poppins'/>
        <div className='flex justify-end'>
            <button onClick={() =>setismodelOpen(false)} className='bg-gray-500 text-white py-2 px-4 rounded mr-2 font-poppins'>Cancel</button>
            <button onClick={onClose} className='bg-blue-500 text-white py-2 px-4 rounded font-poppins'>Save Address</button>
        </div>
    </div>
  )
}

export default ChangeAddress