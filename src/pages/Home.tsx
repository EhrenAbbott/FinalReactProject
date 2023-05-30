import React from 'react'
import Background from '../assets/images/Willkommen.jpg'


function Home() {
  return (
    <div 
      style={{ backgroundImage: `url(${ Background })`}} 
      className='flex flex-row justify-center mx-auto bg-cover bg-fixed'
      >
        <div className='flex place-items-center h-screen'>
          <h3 className='p-12 bg-black bg-opacity-80 text-orange-500 text-2xl '>Welcome to your German Dictionary!</h3>
        </div>
    </div>
  )
}


export default Home