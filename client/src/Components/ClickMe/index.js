import React from "react";
import './style.css'

function ClickMe () {
    return(
        <div>
            <a href="/Faq">
                <div className="insBtnContainer">
                    <img src="https://d1wedsacc4lfnu.cloudfront.net/insurBtn.png" className="insurBtn"/>
                </div>
            </a>
        </div>
    )
}

export default ClickMe;