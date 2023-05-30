import { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import { signInWithPopup, signOut } from 'firebase/auth'
import { auth, Providers } from '../config/firebase'

function Navbar() {
    const [isVisible, setIsVisible] = useState(false)

    const signOutOnClick = () => {
        signOut(auth)
        location.reload();
      }
    
    const signInOnClick = async () => {
        const response = await signInWithPopup(auth, Providers.google);
        if ( response.user ) {
            location.reload();
        }
    }

    const dropDown = () => {
        setIsVisible(!isVisible)
    }
    
    const clicked = () => {
        setIsVisible(false)
    }

    return (
        <nav className='flex items-center justify-between flex-wrap bg-orange-500 p-6'>
            <div className='flex items-center flex-shrink-0 text-black mr-6'>
                <Link to='/' className='font-semibold text-xl tracking-tight'>Your Dictionary!</Link>
            </div>
            <div className="block">
                <button 
                    onClick={dropDown}
                    className="flex items-center px-5 py-5 
                    border rounded border-black hover:text-white hover:border-white"
                    >
                        <div className='text-black hover:text-white'>
                               
                                    Menu
                                
                            </div>
                </button>
            </div>
            { isVisible ? ( 
                <div className='w-full block flex-grow items-center'>
                    <div className="text-sm lg:flex-grow">
                        <Link to='/' onClick={ clicked } className=' flex place-items-center mt-4 lg:inline-block lg:mt-0 
                                text-black hover:text-gray-500 mr-4'>
                            <Button className="p-3 m-5 bg-gray-300 hover:bg-gray-400 justify-center border-black rounded">
                                <div>
                                        Home
                                </div>
                            </Button>
                        </Link>
                        <Link to='/about' onClick={ clicked } className=' flex place-items-center mt-4 lg:inline-block lg:mt-0 
                                text-black hover:text-gray-500 mr-4'>
                            <Button className="p-3 m-5 bg-gray-300 hover:bg-gray-400 justify-center border-black rounded">
                                <div>
                                        About
                                </div>
                            </Button>
                        </Link>
                        <Link to='/dashboard' onClick={ clicked } className=' flex place-items-center mt-4 lg:inline-block lg:mt-0 
                                text-black hover:text-gray-500 mr-4'>
                            <Button className="p-3 m-5 bg-gray-300 hover:bg-gray-400 justify-center border-black rounded">
                                <div>
                                        Your Words
                                </div>
                            </Button>
                        </Link>
                        {
                            !auth.currentUser ?

                        <Link to='/' onClick={ () => { signInOnClick()}} className=' flex place-items-center mt-4 lg:inline-block lg:mt-0 
                                text-black hover:text-gray-500 mr-4'>
                            <Button className="p-3 m-5 bg-gray-300 hover:bg-gray-400 justify-center border-black rounded">
                                <div>
                                        Login
                                </div>
                            </Button>
                        </Link>
                            :
                            <Link to='/' onClick={ () => { signOutOnClick()}} className=' flex place-items-center mt-4 lg:inline-block lg:mt-0 
                                text-black hover:text-gray-500 mr-4'>
                            <Button className="p-3 m-5 bg-gray-300 hover:bg-gray-400 justify-center border-black rounded">
                                <div>
                                        Sign Out
                                </div>
                            </Button>
                        </Link>
                        }
                    </div>
                </div>
                ) : ( 
                <></>
            )}
        </nav>
      )
    }

export default Navbar