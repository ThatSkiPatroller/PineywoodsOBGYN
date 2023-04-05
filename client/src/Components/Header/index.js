import React from 'react';
import Logo1 from '../../Images/transparent-logo.webp';
import './style.css';

// ms-auto = right align, mx-auto = center, ml = left align
function Header () {
  return(
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href='/'>
            <img src={Logo1} alt='Pineywoods OBGYN Logo' className='transpLogo'/>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item mx-auto" >
                <a className="nav-link active"  aria-current="page" href="/#"><b>Home</b></a>
              </li>
              <li className="nav-item mx-auto">
                <a className="nav-link active" href="/AboutUs"><b>About Us</b></a>
              </li>
              <li className="nav-item mx-auto">
                <a className="nav-link active" href="/Gallery"><b>Gallery</b></a>
              </li> 
              <li className="nav-item dropdown mx-auto">
                <a className="nav-link dropdown-toggle active" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"><b>
                  Services
                </b></a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="/Laser"><b>Laser Treatments</b></a></li>
                  <li><a className="dropdown-item" href="/Ultrasound"><b>3D Ultrasounds</b></a></li>
                </ul>
              </li>
              <li className="nav-item mx-auto">
                <a className="nav-link active" href="/Faq"><b>FAQ</b></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header;


