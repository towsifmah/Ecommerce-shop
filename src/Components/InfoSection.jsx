import React from 'react'
import { FaShippingFast , FaHeadset , FaMoneyBillWave , FaLock} from "react-icons/fa";
import { MdDiscount } from "react-icons/md";

const InfoSection = () => {
    const infoItems = [
        {
            icon: <FaShippingFast className='text-3xl text-red-600'/>,
            title: "Free Shipping",
            description: "Get your orders delivered with on extra cost",
        },
        {
            icon: <FaHeadset className='text-3xl text-red-600'/>,
            title:"Support 24/7",
            description:"We are here to assist you anytime"
        },
        {
            icon:<FaMoneyBillWave className='text-3xl text-red-600'/>,
            title:"100% Money Back",
            description:"Full refund if you are not satisfied",
        },
        {
            icon:<FaLock className='text-3xl text-red-600'/>,
            title:"Payment Secure",
            description:"Your payment information is safe with us",
        },
        {
            icon:<MdDiscount className='text-3xl text-red-600'/>,
            title:"Discount",
            description:"Enjoy the best prices on our products"
        }
        

    ]
  return (
    <div className='bg-white pb-8 pt-6'>
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4'>
        {
            infoItems.map((item, index) =>(
                <div key={index} className='flex flex-col items-center text-center p-4 border rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 cursor-pointer'>
                    {item.icon}
                    <h3 className='font-poppins text-xl font-semibold mt-4'>{item.title}</h3>
                    <p className='font-poppins text-gray-600 mt-2'>{item.description}</p>
                </div>
            ))
        }
        </div>
    </div>
  )
}

export default InfoSection