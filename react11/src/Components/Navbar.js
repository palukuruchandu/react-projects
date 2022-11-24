import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from 'react-use-cart'
const Navbar = () => {
  const { totalUniqueItems } = useCart()
  return (
    <>
   <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className='container'>
        <Link to='/Home' className="navbar-brand fw-bold fs-4">
          <i className="fa-sharp fa-solid fa-cart-shopping"></i>{' '}{ ' '}{ ''}
      E COMMERSE WEBSITE
           </Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item active">
                <Link to='/Home' className='nav-link'>Home</Link>
              </li>
              <li className="nav-item">
                <Link to='/Products' className='nav-link'>Products</Link>
              </li>
              {/* <li className="nav-item">
                <Link to='/Services' className='nav-link'>Services</Link>
              </li> */}
              <li className="nav-item">
                <Link to='/Contact' className='nav-link'>Contact</Link>
              </li>
              <li className="nav-item">
                <Link to='/About' className='nav-link'>About us</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='buttons'>
          <Link to='/Login' className='btn btn-outline-dark me-2'>
            <i className='fa fa-sign-in me-4'>Login</i>
          </Link>
          <Link to='/Register' className='btn btn-outline-dark me-2'>
            <i class="fa-solid fa-user-plus">Register</i>
          </Link>
          <Link to='/Cart' className='btn btn-outline-dark me-2'>
            <i class="fa-solid fa-cart-arrow-down">cart({totalUniqueItems}) </i>
          </Link>
        </div>
      </nav>



    </>
  )
}

export default Navbar