import React from 'react'
import Button from './Button'
function Card({id,img,name,handleDelete}) {
  return (
    <div className='card w-[270px] border border-gray-200 text-center overflow-hidden p-6 rounded-lg shadow-xl m-10'>
            <img className='w-[100%] h-[200px] object-cover rounded-lg ' src={img} alt="profile pic"/>
        <p className='mb-0 text-center font-bold text-lg text-gray-700 my-2'>{name}</p>
        <div className='text-center mb-3 text-gray-600'>
           <i>{name}</i></div>
        <Button/>
        <button className='bg-red-600 px-3 py-3 text-white rounded' onClick={()=>handleDelete(id)}>Delete account</button>
    </div>
  )
}

export default Card