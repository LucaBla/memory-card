import Card from "./Card";
import React, {useState, useEffect, Children} from "react";
import ScoreBoard from "./ScoreBoard";

function CardContainer() {
  const [cardsId, setCardsId] = useState([]);
  const [childIsClicked, setChildIsClicked] = useState(false);
  const [scoreChangeRequested, setScoreChangeRequested] = useState(false);
  const [score, setScore] = useState(0);
  const [highscore, setHighscore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

  function fillCardsId(){
    const cardListId = [];
    for(let i = 0; i < 15 - 1; i++){

      cardListId.push(i)
      
    }
    setCardsId(insertScoreBoardInArray(shuffleArray(cardListId)));
  }

  function shuffleArray(array) {
    var j, x, i;
    for (i = array.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        if(i === 7 || j === 7){
          continue;
        }
        x = array[i];
        array[i] = array[j];
        array[j] = x;
    }
    return array;
  }

  function insertScoreBoardInArray(array){
    if(array.length % 2 !== 0){
      return array;
    }
    const scoreBoardPosition = array.length/2;
    let ElementIdAtScoreBoardPosition = array[scoreBoardPosition];

    if(ElementIdAtScoreBoardPosition !== array[array.length - 1]){
      array.push(ElementIdAtScoreBoardPosition);
    }
    array[scoreBoardPosition] = 'scoreboard';

    return array;
  }

  function shuffleCards(){
    let newCardsId = [...cardsId];
    console.log(cardsId);
    newCardsId = shuffleArray(newCardsId);
    setCardsId(newCardsId);
  }

  useEffect(()=>{
    fillCardsId();
  }, [])

  useEffect(() => {
    if(childIsClicked === true){
      shuffleCards();
      setChildIsClicked(false);
    }
  }, [childIsClicked]);

  useEffect(() => {
    if(scoreChangeRequested === true){
      setScore(score + 1);
      setScoreChangeRequested(false);
    }
  }, [scoreChangeRequested]);

  useEffect(() => {
    if(isGameOver === true){
      if(score > highscore){
        setHighscore(score);
      }
      setScore(0);
      console.log("Game Over");
      setIsGameOver(false);
    }
  }, [isGameOver]);

  return (
    <div className="card-container">
      {cardsId.map( cardId =>{
        if(cardId === 'scoreboard'){
          return <ScoreBoard key='200' score={score} highscore={highscore}></ScoreBoard>
        }
        else{
          return <Card key={cardId}
                            cardId={cardId}
                            setChildIsClicked={setChildIsClicked}
                            setScoreChangeRequested={setScoreChangeRequested}
                            setIsGameOver={setIsGameOver}
                            isGameOver={isGameOver}>

                      </Card>
        }
      })}
    </div>
  );
}

export default CardContainer;