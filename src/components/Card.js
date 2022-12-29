import React, {useState, useEffect} from "react";

function Card(props) {
  const [isClicked, setIsClicked] = useState(props.isGameOver);

  function handleClick(){
    if(isClicked === false){
      setIsClicked(true);
      props.setChildIsClicked(true);
      props.setScoreChangeRequested(true);
    }
    else{
      props.setIsGameOver(true);
    }
  }

  useEffect(() => {
    if(props.isGameOver === true){
      setIsClicked(false);
    }
  }, [props.isGameOver]);

  return (
    <div className="card" onClick={() => handleClick()}>
      <img src={require('../memory_images/card_' + props.cardId +'.png')}/>
    </div>
  );
}

export default Card;