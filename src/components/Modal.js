import React, {useState, useEffect} from "react";

function Modal(props) {

  function removeModal(e){
    if(e.currentTarget === e.target){
      props.setIsModalOpen(false);
    }
  }

  return <div className="modal-bg" onClick={removeModal}>
    <div className="modal">
      <div className="rules-wrapper">
        <h1>Rules</h1>
        <ul>
          <li>There are 14 cards.</li>
          <li>Click on cards that you have not clicked on before.</li>
          <li>If you click on a card that you have already clicked on, 
              the game will end and you will lose.</li>
          <li>If you lose, the game will automatically restart.</li>
          <li>If you manage to click on all the cards without 
              clicking on any that you have already clicked on, you will win the game.</li>
        </ul>
      </div>
    </div>
  </div>
}

export default Modal;