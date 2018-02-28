import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './LoginForm.css';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    LoginForm.propTypes = {
      text: PropTypes.string,
    };
    LoginForm.defaultProps = {
      text: 'default',
    };
    this.state = {
      username: "nulllllll",
    };
  }

  // canLogin=()=>{
  //   if(this.state.username!=="null" && this.state.username.length!==0){
  //     return true
  //   }
  //   else{
  //     return false
  //   }
  // }

  clickHandler=()=>{
    this.props.getLoginData(this.state.username);
    console.log('username', this.state.username);
    console.log("adding users");
    fetch('/users',{
      method: 'POST',
      body: this.state.username,
    })
  }

  render() {
    return (
      <div className="LoginForm">
          Login
        <input type="text" onChange={(event) => { this.setState({ username:event.target.value })}} />
        <button type="button" value="Login" onClick={this.clickHandler}/>
      </div>
    );
  }
}

export default LoginForm;
