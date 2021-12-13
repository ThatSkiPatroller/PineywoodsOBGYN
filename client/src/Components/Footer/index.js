import React from 'react';
import './style.css';

function Footer () {
    return(
        <div>
            <footer class="py-3 my-4 footerDiv">
                <ul class="nav justify-content-center border-bottom pb-3 mb-3 footerBorder">
                    <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">"Be a Warrior, Not Just a Survivor!"</a></li>
                </ul>
                <p class="text-center text-muted copyright">© 2022 Pineywoods OBGYN</p>
            </footer>
        </div>
    )
}

export default Footer;