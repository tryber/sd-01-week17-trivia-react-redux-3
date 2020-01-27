import React from 'react';
import PropTypes from 'prop-types';
import { getCategory } from '../services/TriviaApi';
import Loading from './Loading';
import './Dropdown.css';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fetchDone: false,
      category: [],
    };

    this.renderInput = this.renderInput.bind(this);
    this.renderInputCategory = this.renderInputCategory.bind(this);
    this.renderInputDifficulty = this.renderInputDifficulty.bind(this);
    this.renderInputType = this.renderInputType.bind(this);
    this.renderLabel = this.renderLabel.bind(this);
  }

  componentDidMount() {
    if (this.props.types === 'category') {
      return getCategory().then((data) => this.changeFetch(data.trivia_categories));
    }
    return this.changeFetch([]);
  }

  changeFetch(value) {
    this.setState({
      fetchDone: true,
      category: value,
    });
  }

  createOption(id, name, index) {
    const { category } = this.state;
    return <option key={category[index].id} value={id}>{name}</option>;
  }

  renderInputCategory() {
    const { onChange } = this.props;
    const { category } = this.state;
    return (
      <select
        id="a"
        className="slc"
        data-testid={'question-category-dropdown'}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">Any Category</option>
        {category.map(({ id, name }, index) => this.createOption(id, name, index))};
      </select>
    );
  }

  renderInputDifficulty() {
    const { onChange } = this.props;
    return (
      <select
        id="b"
        className="slc"
        data-testid="question-difficulty-dropdown"
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">Any Difficulty</option>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
    );
  }

  renderInputType() {
    const { onChange } = this.props;
    return (
      <select
        id="c"
        className="slc"
        data-testid={'question-type-dropdown'}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">Any Type</option>
        <option value="multiple">Multiple Choice</option>
        <option value="boolean">True / False</option>
      </select>
    );
  }


  renderInput() {
    const { types } = this.props;
    const inputs = {
      type: this.renderInputType(),
      difficulty: this.renderInputDifficulty(),
      category: this.renderInputCategory(),
    };
    return inputs[types];
  }

  renderLabel() {
    const { types } = this.props;
    const label = {
      type: <label htmlFor="c" className="labels">Tipo:</label>,
      difficulty: <label htmlFor="b" className="labels">Dificuldade:</label>,
      category: <label htmlFor="a" className="labels">Categoria:</label>,
    };
    return label[types];
  }

  render() {
    if (!this.state.fetchDone) return <Loading />;
    return (
      <div className="Dropdown" >
        {this.renderLabel()}
        {this.renderInput()}
      </div >
    );
  }
}

export default Dropdown;

Dropdown.propTypes = {
  types: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
