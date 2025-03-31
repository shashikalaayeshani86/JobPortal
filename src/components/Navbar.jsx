import React from 'react'
import { assets } from '../assets/assets'
import { useClerk,UserButton,useUser } from '@clerk/clerk-react'

const Navbar = () => {

    //const {openSignIn} = useClerk();

  return (
    <div className='py-4 shadow'>
      <div className='container flex items-center justify-between px-4 mx-auto 2xl:px-20'>
        <img src = {assets.logo}/>
        <div className='flex gap-4 max-sm:text-xs'>
            <button className='text-gray-600'>Recruiter Login</button>
            <button className='px-6 py-2 text-white bg-blue-600 rounded-full sm:px-9'>Login</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
