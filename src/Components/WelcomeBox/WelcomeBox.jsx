import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './WelcomeBox.css';

class WelcomeBox extends Component {
  constructor(props) {
    super(props);
    WelcomeBox.propTypes = {
      text: PropTypes.string,
    };
    WelcomeBox.defaultProps = {
      text: 'default',
    };
    this.state = {
      text: props.text,
    };
  }
  render() {
    return (
      <div className="WelcomeBox">
        <div>
          Welcome
        </div>
        <div>
            to
        </div>
        <div className="welcome-text">
          {this.state.text}
        </div>
      </div>
    );
  }
}

export default WelcomeBox;
