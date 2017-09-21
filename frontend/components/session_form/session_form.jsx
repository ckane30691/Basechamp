import React from 'react';
import { Link, hashHistory } from 'react-router';

// NOTE still need to implement render errors

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate(){
    this.redirectIfLoggedIn();
  }

  redirectIfLoggedIn() {
    if (this.props.loggedIn) {
      hashHistory.push("/projects");
    }
  }

  update(field){
    return e => { this.setState({[field]: e.currentTarget.value }); };
  }

  handleSubmit(e){
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user});
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, idx) => (
          <li key={`error-${idx}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    //Possibly refactor this
    let text = this.props.formType === 'login' ? 'Log In' : 'Sign Up'
    let passage = this.props.formType === 'login' ?
      <p>
        Just enter your username & password
        & we'll get you right into Basechamp
      </p>
      : <p>
        Fill out the fields below to sign up
      </p>
    return (
      <div className={`session-${this.props.formType}-container`}>
        <form onSubmit={this.handleSubmit}
          className={`${this.props.formType}-form-box`}>
          {passage}

          <div className="session-form">
            <br />
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="session-input"
                placeholder="Enter Username" />
          <br />
               <input type="password"
                 value={this.state.password}
                 onChange={this.update('password')}
                 className="password-input"
                 placeholder="Enter Password"
               />
             <br/>
             <input className={`${this.props.formType}-submit`} type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }

}

export default SessionForm;
