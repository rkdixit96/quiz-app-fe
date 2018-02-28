import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './QuestionContainer.css';

import Question from '../Question/Question';

class QuestionContainer extends Component {
  constructor(props) {
    super(props);
    QuestionContainer.propTypes = {
      text: PropTypes.string,
    };
    QuestionContainer.defaultProps = {
      text: 'default',
    };
    this.state = {
      text: props.text,
      userName: props.userName,
    };
  }


  populateQuestions = questions => questions.map(value => <Question question={value.question} options={value.options} id={value.id} userName={this.state.userName}  />);


  render() {
    return (
      <div className="QuestionContainer">
          {this.populateQuestions(this.props.questions)}
      </div>
    );
  }
}

export default QuestionContainer;
