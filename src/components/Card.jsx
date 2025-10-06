import React from 'react'
import Button from './Button'
function Card() {
  return (
    <div className='card w-[270px] border border-gray-200 text-center overflow-hidden p-6 rounded-lg shadow-xl m-10'>
            <img className='w-[100%] h-[200px] object-cover rounded-lg ' src="https://hips.hearstapps.com/hmg-prod/images/ana-de-armas-arrives-at-the-vanity-fair-oscar-party-hosted-news-photo-1740776729.pjpeg?crop=1.00xw:0.738xh;0,0.0401xh&resize=640:*" alt="profile pic"/>
        <p className='mb-0 text-center font-bold text-lg text-gray-700 my-2'>Ana de Armas</p>
        <div className='text-center mb-3 text-gray-600'>
           <i>Ana de Armas</i> is a Cuban-Spanish actress.</div>
        {/* <button className='py-3 px-4 border border-gray-300 rounded-lg bg-gray-200'onClick={()=>console.log("clicked")}>Explore More</button> */}
        <Button/>
    </div>
  )
}

export default Card