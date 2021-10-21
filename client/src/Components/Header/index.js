import React from 'react';
import Logo1 from '../../Images/scaled-logo.png';
import './style.css';


function Header () {
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href='/'>
        <img src={Logo1} alt='Pineywoods OBGYN Logo'/>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item" >
          <a className="nav-link active"  aria-current="page" href="/#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="/#AboutUs">About Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="/#Gallery">Gallery</a>
        </li> 
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle active" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Services
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="/#Laser">Laser Treatment</a></li>
            <li><a className="dropdown-item" href="#">3D Ultrasound</a></li>
            <li><a className="dropdown-item" href="#">Pumpkins</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="/#Updates">Updates</a>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
        </div>
    )
}

export default Header;


