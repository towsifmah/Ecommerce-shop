import React from 'react'

const categories = [
    {
        title:"Mans Fashion",
        imageUrl:"https://i.ibb.co/Bjv859H/mans.png"
    },
    {
        title:"Womans Fashion",
        imageUrl:"https://i.ibb.co/dbLTy91/womans.png"
    },
    {
        title:"Kids Fashion",
        imageUrl:"https://i.ibb.co/JrPvZX0/kids.png"
    }
]

const Category = () => {
  return (
    <div className='container grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4'>
        { 
            categories.map((categoreitems , index) =>(
                <div key={index} className='relative h-64 transform transition-transform duration-300 hover:scale-105 cursor-pointer'>
                    <img src={categoreitems.imageUrl} className='w-full h-full object-cover bg-center rounded-lg shadow-md' alt="" />
                    <div className='absolute top-20  left-8 '>
                        <h4 className='font-poppins text-lg font-bold text-white'>{categoreitems.title}</h4>
                        <p className='font-poppins text-sm text-white font-medium hover:underline duration-600'>View All</p>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default Category