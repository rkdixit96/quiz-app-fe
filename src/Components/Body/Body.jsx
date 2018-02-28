import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Body.css';

class Body extends Component {
  constructor(props) {
    super(props);
    Body.propTypes = {
      text: PropTypes.string,
    };
    Body.defaultProps = {
      text: 'default',
    };
    this.state = {
      text: props.text,
    };
  }
  render() {
    return (
      <div className="Body" >
          Welcome to Quizzy
          Login
      </div>
    );
  }
}

export default Body;
