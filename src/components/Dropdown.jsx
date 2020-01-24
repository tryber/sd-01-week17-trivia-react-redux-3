import React from 'react';
import PropTypes from 'prop-types';
import './Dropdown.css';

const testid1 = 'question-category-dropdown';
const testid2 = 'question-difficulty-dropdown';
const testid3 = 'question-type-dropdown';

const renderInputCategory = (change) => (
  <select id="a" className="slc" data-testid={testid1} onChange={(e) => change(e.target.value)}>
    <option value="">Any Category</option>
    <option value="9">General Knowledge</option>
    <option value="10">Entertainment: Books</option>
    <option value="11">Entertainment: Film</option>
    <option value="12">Entertainment: Music</option>
    <option value="13">Entertainment: Musical Theatres</option>
    <option value="14">Entertainment: Television</option>
    <option value="17">Science &amp; Nature</option>
    <option value="18">Science: Computers</option>
    <option value="19">Science: Mathematics</option>
    <option value="20">Mythology</option>
    <option value="21">Sports</option>
    <option value="22">Geography</option>
    <option value="23">History</option>
    <option value="24">Politics</option>
    <option value="25">Art</option>
    <option value="26">Celebrities</option>
    <option value="27">Animals</option>
    <option value="28">Vehicles</option>
  </select>
);

const renderInputDifficulty = (change) => (
  <select id="b" className="slc" data-testid={testid2} onChange={(e) => change(e.target.value)} >
    <option value="">Any Difficulty</option>
    <option value="easy">Easy</option>
    <option value="medium">Medium</option>
    <option value="hard">Hard</option>
  </select>
);

const renderInputType = (change) => (
  <select id="c" className="slc" data-testid={testid3} onChange={(e) => change(e.target.value)}>
    <option value="">Any Type</option>
    <option value="multiple">Multiple Choice</option>
    <option value="boolean">True / False</option>
  </select>
);


const renderInput = (value, func) => {
  const inputs = {
    type: renderInputType(func),
    difficulty: renderInputDifficulty(func),
    category: renderInputCategory(func),
  };
  return inputs[value];
};

const renderLabel = (value) => {
  const label = {
    type: <label htmlFor="a" className="labels">Tipo:</label>,
    difficulty: <label htmlFor="b" className="labels">Dificuldade:</label>,
    category: <label htmlFor="c" className="labels">Categoria:</label>,
  };
  return label[value];
};

const Dropdown = ({ type, onChange }) => (
  <div className="Dropdown">
    {renderLabel(type)}
    {renderInput(type, onChange)}
  </div>
);

export default Dropdown;

Dropdown.propTypes = {
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
