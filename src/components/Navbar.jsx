import React from 'react'
import { assets } from '../assets/assets'
import { useClerk,UserButton,useUser } from '@clerk/clerk-react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react';

const Navbar = () => {

    //const {openSignIn} = useClerk();
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();

  return (
    <div className='py-4 shadow'>
      <div className='container flex items-center justify-between px-4 mx-auto 2xl:px-20'>
        <img src = {assets.logo}/>
        <div className='flex gap-4 max-sm:text-xs'>

            {user ? (
            <>
              {user.role === 'admin' && <button onClick={() => navigate('/admin')}>Admin Dashboard</button>}
              {user.role === 'job_seeker' && <button onClick={() => navigate('/job-seeker')}>Job Seeker Dashboard</button>}
              {user.role === 'recruiter' && <button onClick={() => navigate('/recruiter')}>Recruiter Dashboard</button>}
              <button onClick={logout} className='px-6 py-2 text-white bg-red-600 rounded-full'>
                Logout
              </button>
            </>
          ) : (
            <button className='px-6 py-2 text-white bg-blue-600 rounded-full' onClick={() => navigate('/login')}>
              Login
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar
