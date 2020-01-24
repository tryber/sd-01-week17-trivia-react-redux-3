import React from 'react';
import Header from './Header';
import Question from './Question';
import Answers from './Answers';
import NextButton from './NextButton';
import './Game.css';

class Game extends React.Component {
  render() {
    return (
      <div className="Game_screen">
        <Header />
        <div className="Game_playing">
          <Question />
          <div className="Game_answers-and-next">
            <Answers />
            <NextButton />
          </div>
        </div>
      </div>
    );
  }
}

export default Game;
