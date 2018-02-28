import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Question.css';

import Option from '../Option/Option';

class Question extends Component {
  constructor(props) {
    super(props);
    Question.propTypes = {
      question: PropTypes.string,
      options: PropTypes.string,
      id: PropTypes.string,
    };
    Question.defaultProps = {
      question: 'default',
      options: 'default',
      id: 'default',
    };
    this.state = {
      question: props.question,
      options: props.options,
      id: props.id,
    };
  }

  populateOptions = (options) => options.map(value => <Option text={value[Object.keys(value)[0]]}  />);
  


  render() {
    return (
      <div className="Question">
        <div className="question-statement">
          {this.state.question}
        </div>
        <div>
            <form>
                {this.populateOptions(JSON.parse(this.state.options))}
            </form>
        </div>
      </div>
    );
  }
}

export default Question;
