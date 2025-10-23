import React from 'react'
import { useState } from 'react'
function State() {
    const [liked, setLiked] = React.useState(false);
  return (
    <div>
        <button className='p-2 rounded-lg ml-10 font-extrabold text-8xl' onClick={()=>{
          setLiked(true);
          setTimeout(() => setLiked(false), 10000)
        }}>{liked ? "❤️" : "🤍"}</button>
    </div>
  )
}

export default State