import React from 'react';
import Logo1 from '../../Images/Pineywoods-OBGYN-office-Logo.jpg';
import Logo2 from '../../Images/Pineywoods-OBGYN-Sketched-Logo.jpg';
import './style.css';

function Header () {
    return(
        <div>
            <header class="navbar navbar-expand navbar-light flex-column flex-md-row bd-navbar">
                <a class="navbar-brand mr-0 mr-md-2" aria-label="Bootstrap"><img src={Logo1} width='100%' height='100%'/><title>Bootstrap</title></a>
                <div class="navbar-nav-scroll">
                    <ul class="navbar-nav bd-navbar-nav flex-row">
                        <li class="nav-item">
                            <a type='button' class="nav-link active" href="/">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="/AboutUs">About Us</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="/Gallery">Gallery</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="/Updates">Updates</a>
                        </li>
                    </ul>
                </div>
            </header>
        </div>
    )
}

export default Header;


