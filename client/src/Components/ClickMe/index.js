import React from "react";
import './style.css'

function ClickMe () {
    return(
        <div>
            <div className="insBtnContainer">
                <a href="/Faq">
                    <img src="https://d1wedsacc4lfnu.cloudfront.net/insurBtn.png" className="insurBtn"/>
                </a>
            </div>
        </div>
    )
}

export default ClickMe;