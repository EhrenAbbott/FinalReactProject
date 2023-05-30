import Background from '../assets/images/Oktoberfest.jpg'

function About() {
  return (
    <div
      className='flex flex-col justify-center mx-auto bg-cover bg-fixed'
      style={{ backgroundImage: `url(${ Background })`}}
      >
        <h3 className='text-transparent'>h</h3>
        <h3 className='flex-col text-2xl place-items-center flex p-9 bg-gray-900 bg-opacity-90 text-orange-500 rounded '>Add grammatical information, such as:</h3>
        <div className='flex-col flex place-items-center'>
        <h3 className='text-transparent'>h</h3>
        <h3 className='flex-col text-2xl place-items-center flex p-2 bg-gray-900 bg-opacity-80 text-orange-500 rounded '>how to form plurals</h3>
        </div>
        <div className='flex-col flex place-items-center'>
        <h3 className='text-transparent'>h</h3>
        <h3 className='flex-col text-2xl place-items-center flex p-2 bg-gray-900 bg-opacity-60 text-orange-500 rounded '>associated cases</h3>
        </div>
        <div className='flex-col flex place-items-center'>
        <h3 className='text-transparent'>h</h3>
        <h3 className='flex-col text-2xl place-items-center flex p-2 bg-gray-900 bg-opacity-80 text-orange-500 rounded '>frequently paired prepositions</h3>
        </div>
        <div className='flex-col flex place-items-center'>
        <h3 className='text-transparent'>h</h3>
        <h3 className='flex-col text-2xl place-items-center flex p-2 bg-gray-900 bg-opacity-60 text-orange-500 rounded '>past participle formation</h3>
        </div>
        <div className='flex-col flex place-items-center h-screen'>
        <h3 className='text-transparent'>h</h3>
        <h3 className='flex-col text-2xl place-items-center flex p-2 bg-gray-900 bg-opacity-80 text-orange-500 rounded '>and more!</h3>
        </div> 
          
    </div>
    
  )
}

export default About