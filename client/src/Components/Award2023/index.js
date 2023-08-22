import image from "../../Images/BestOfLufkinAward2023.png";
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import "./style.css";

const Award2023 = () => {
    const [showModal, setShowModal] = useState(false);

    // use useEffect to run a function when the component mounts
    // pass an empty array as the second argument to run the effect only once
    useEffect(() => {
      // set the state variable to true to open the modal
      setShowModal(true);
    }, []);
  
    // create a function to close the modal by setting the state variable to false
    const handleClose = () => {
      setShowModal(false);
    };
  
    // return the JSX for your component
    return (
      <div className="theModal">
        {/* use a conditional rendering to show or hide the modal based on the showModal state */}
        {showModal && (
          // use a div element to create a backdrop for the modal
          <div className="modal-backdrop">
            <div className="modal-content">
              <header className="modal-header">
                <h2>Thanks for voting us Best of Lufkin 2023!</h2>
                <button onClick={handleClose} className="modalCloseBtn"><FontAwesomeIcon icon={faTimes} size="lg"/></button>
              </header>
              <main className="modal-main">
                <img src="https://d1wedsacc4lfnu.cloudfront.net/BestOfLufkinAward2023Compressed.png" className="award23"/>
              </main>
              <h3 className="pForAward">We are sincerely grateful for all of your love and support over the years. We love taking care of you and appreciate this recognition!</h3>
            </div>
          </div>
        )}
      </div>
    );
  
};

export default Award2023;