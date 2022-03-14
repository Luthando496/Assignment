import React from 'react'
import ReactRoundedImage from "react-rounded-image";
import bell from '../notification-bell-svgrepo-com.svg'

const Navbar = () => {
  return (
      <div className='top'>

     <header className='header'>
            <h2 className='logo'>bOnline</h2>
     </header>

     <nav className='user-nav'>
         <div className='user-nav__box'>
        <i src={bell} alt='bell' className='fa-regular fa-bell user-nav__nav-icon'  ></i>
     </div>

     <div className='user-nav__user'>

     <div className='user-nav__box-image'>
            <img src='/images/image.jpg' alt='image' className='user-nav__photo' />
    </div>

    </div>
            <div className='user-nav__name'>
            <span >First LastName</span>
            <span >luthandodidiza@gmail.com</span>

     </div>
     </nav>

      </div>
  )
}

export default Navbar