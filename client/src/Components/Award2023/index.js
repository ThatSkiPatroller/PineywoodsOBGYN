import image from "../../Images/BestOfLufkinAward2023.png";
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import "./style.css";

const Award2023 = () => {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
      setShowModal(true);
    }, []);
  
    const handleClose = () => {
      setShowModal(false);
    };
  
    return (
      <div className="theModal">
        {showModal && (
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