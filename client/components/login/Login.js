import React from 'react';
import ReactDOM from 'react-dom';
import EmpDetails from '../details/EmpDetails';
 
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value1: '',
                  value2: ''};

    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange1(event) {
    this.setState({value1: event.target.value});
  }
  
  handleChange2(event) {
    this.setState({value2: event.target.value});
  }

  handleSubmit(event, data) {
    if(this.state.value1 == 'Vishant' && this.state.value2 == 'password')
    {
     this.context.router.replace({pathname: 'details', query: {userId: this.state.value1}});
    }
    else
      {
        alert ("wrong credentials");
      }
    event.preventDefault();
  }
  
  render() {
    return (
      <div>
      
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange1} />
        </label>
        
        <label>
          Password:
          <input type="password" value={this.state.value} onChange={this.handleChange2} />
        </label>
        <input type="submit" value="Submit"/>
      </form>
        
      
      </div>
      
    );
  }
}

export default Login;

Login.contextTypes = {
  router: React.PropTypes.object
};