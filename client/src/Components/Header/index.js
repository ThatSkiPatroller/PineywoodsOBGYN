import React from 'react';
import Logo1 from '../../Images/scaled-logo.png';
import Button from '@material-ui/core/Button';
import './style.css';


function Header () {
    return(
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href='/'>
        <img src={Logo1}/>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item" >
          <a class="nav-link active"  aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="/AboutUs">About Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="/Gallery">Gallery</a>
        </li> 
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle active" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Services
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Laser Treatment</a></li>
            <li><a class="dropdown-item" href="#">Ultrasound</a></li>
            <li><a class="dropdown-item" href="#">Pumpkins</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="/Updates">Updates</a>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
        </div>
    )
}
 {/* <header class="navbar navbar-expand navbar-light flex-column bd-navbar">
                <a class="navbar-brand mr-0 mr-md-2" aria-label="Bootstrap"><img src={Logo1} width='100%' height='100%' /><title>Bootstrap</title></a>
                <div class="navbar-nav-scroll">
                    <ul class="navbar-nav bd-navbar-nav flex-row">
                        <li class="nav-item">
                            <a id='grey' class="nav-link active" href="/">Home</a>
                        </li>
                        <li class="nav-item">
                            <a id='grey' class="nav-link active" href="/AboutUs">About Us</a>
                        </li>
                        <li class="nav-item">
                            <a id='grey' class="nav-link active" href="/Gallery">Gallery</a>
                        </li>
                        <li class="nav-item">
                            <a id='grey' class="nav-link active" href="/Updates">Updates</a>
                        </li>
                    </ul>
                </div>
            </header> */}
export default Header;


