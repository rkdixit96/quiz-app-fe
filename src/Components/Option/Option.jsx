import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Option.css';

class Option extends Component {
  constructor(props) {
    super(props);
    Option.propTypes = {
      text: PropTypes.string,
      optionId: PropTypes.string,

    };
    Option.defaultProps = {
      text: 'default',
      optionId: 'default',
    };
    this.state = {
      text: props.text,
      optionId: props.optionId,
      questionId: props.questionId,
      userName: props.userName,
    };
  }

  handleOptionChange(event) {
    const data = { userName: this.state.userName, questionId: this.state.questionId, optionId: this.state.optionId };
    console.log(data);
    fetch('/user/answers', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  render() {
    return (

      <label>
        <input
          type="radio"
          value={this.state.optionId}
          name="question"
          onChange={this.handleOptionChange.bind(this)}
        />
        {this.props.text}
      </label>


    );
  }
}

export default Option;
