import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import TextFeedback from './TextFeedback';
import './Feedback.css';

const Feedback = () => (
  <div className="Feedback">
    <Header />
    <div className="sub-div">
      <TextFeedback />
      <Link to="/game/ranking" >VER RANKING</Link>
      <Link to="/game" className="green">JOGAR NOVAMENTE</Link>
    </div>
  </div>
);

export default Feedback;