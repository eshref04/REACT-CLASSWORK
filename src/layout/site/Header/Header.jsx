import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header-top'>
      <header  className='header__start p-2 ' >
        <div className="container justify-content-between d-flex align-items-center my-elements">
          <ul className='header__start__left d-flex gap-5 align-items-center my-2'>
            <li><Link>+12312-3-1209 </Link></li>
            <li><Link>SUPPORT@COLORLIB.COM</Link></li>
          </ul>

          <button className='btn btn-primary p-2'><Link className='text-light text-decoration-none'>LOGIN</Link></button>
       
        </div>
      </header>

      <header className='header__end p-3'>

        <div className="container justify-content-between d-flex align-items-center">
        <img width={"50px"} height={"30px"} src="https://preview.colorlib.com/theme/shop/img/logo.png.webp" alt="" />

<ul className='header__end__menu d-flex gap-5'>
 <li><Link>HOME</Link></li>
 <li><Link>ADMIN</Link></li>
 <li><Link>BASKET</Link></li>
 <li><Link>WOMEN</Link></li>
 <li><Link>CATEGORY</Link></li>
 <li><Link>PAGES</Link></li>
</ul>
        </div>
   
      </header>
    </div>
  )
}

export default Header
