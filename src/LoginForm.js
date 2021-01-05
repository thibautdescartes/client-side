import React from 'react';


import './App.css';

class LoginForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          username: '',
          password: ''
        };
  
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'text' ? target.value : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }

    handleSubmit(event) {
      var credentials = 'username: ' + this.state.username + ' password: ' + this.state.password;
      console.log(credentials)
      
      fetch('https://dry-chamber-01248.herokuapp.com/api/restaurants/', {
        method: 'POST',
      })
      .then(response => response.json())
      .then(data => {console.log('Success:', data);
      })
    

      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Username:
            <input name="username" type="text" value={this.state.username} onChange= {this.handleInputChange} />
          </label>
          <label>
            Password:
            <input 
                name="password" 
                type="text" 
                value={this.state.password} 
                onChange={this.handleInputChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }
  
  export default LoginForm;
  