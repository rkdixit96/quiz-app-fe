import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Body.css';

import WelcomeBox from '../WelcomeBox/WelcomeBox';
import LoginForm from '../LoginForm/LoginForm';
import QuestionContainer from '../QuestionContainer/QuestionContainer';

class Body extends Component {
  constructor(props) {
    super(props);
    Body.propTypes = {
      page: PropTypes.string,
    };
    Body.defaultProps = {
      page: 'login',
    };
    this.state = {
      page: 'login',
      userName: 'default',
      questions: 'null,'
    };
  }

  settingState=(state)=>{
    this.setState(state)
  }

  componentDidMount() {
      console.log("in")
      fetch('/questions')
      .then((response) => {
        response.json().then((data) => {
          const questions = [];
          data.result.forEach((element) => {
            questions.push(element);
          }, this);
          console.log(questions);
          this.settingState({
            questions:questions,
          })
        });
      });
    
    
  }

  getLoginData=(userdata)=> {
    fetch('/questions')
      .then((response) => {
        response.json().then((data) => {
          if (data.result[0] === undefined) {
            fetch(
              '/questions',
              {
                method: 'POST',
              },
            ).then(() => {
              this.setState({
                userName: userdata,
                page: 'questions',
              });
            });
          } else {
            this.setState({
              userName: userdata,
              page: 'questions',
            });
          }
        });
      });
  }


  render() {
    if (this.state.page === 'login') {
      return (
        <div className="Body" >
          <div className="center-card">
            <WelcomeBox text="Quizzy!" />
            <LoginForm getLoginData={this.getLoginData} />
          </div>
        </div>
      );
    }
    if (this.state.page === 'questions') {
      return (
        <div>
          {this.state.userName}
          <QuestionContainer questions={this.state.questions} userName={this.state.userName} />
          <input type="button" value="Calculate Score" />
        </div>
      );
    }
  }
}

export default Body;
