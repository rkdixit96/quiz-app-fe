import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Option.css';

class Option extends Component {
  constructor(props) {
    super(props);
    Option.propTypes = {
      text: PropTypes.string,
    };
    Option.defaultProps = {
      text: 'default',
    };
    this.state = {
      text: props.text,
    };
  }
  render() {
    return (

      <label>
        <input
          type="radio"
          value="option1"
          name="question"
        />
        {this.props.text}
      </label>


    );
  }
}

export default Option;
