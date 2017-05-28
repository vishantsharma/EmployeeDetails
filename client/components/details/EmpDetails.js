import React from 'react';
import { Link } from 'react-router';
import Login from '../login/Login';

class EmpDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      designationCreated: '',
      salaryCreated: '',
      employeeIdCreated: '',
      designation:'',
      salary:'',
      employeeId:'',
      empDetails: [],
    };
  }
  
  handleNameChange = (evt) => {
    this.setState({ name: evt.target.value });
  }
  
  handleChange = (evt) => {

      if(evt.target.name === 'designation')
        {
      this.setState({
        [evt.target.name]: evt.target.value,
        designationCreated:  new Date().toUTCString()
      })
     }
     if(evt.target.name === 'salary')
        {

          if(Number.isInteger(Number.parseInt(evt.target.value))) {
            this.setState({
        [evt.target.name]: evt.target.value,
        salaryCreated: new Date().toUTCString()
      })
          }
     }
     if(evt.target.name === 'employeeId')
        {
      this.setState({
        [evt.target.name]: evt.target.value,
        employeeIdCreated: new Date().toUTCString()
      })
     }

    }

  handleAdd = () => {
    if(this.state.empDetails.length > 1) {
      this.state.empDetails.splice(0);
    }
    if(this.state.designation !== '' || this.state.designation !== null) {
      let obj = {
        identifier: 'Designation',
        title: this.state.designation,
        created: this.state.designationCreated
      }
      this.state.empDetails.push(obj);
    }
    
     if(this.state.salary !== '' || this.state.salary !== null)  {
      let obj = {
        identifier: 'Salary',
        title: this.state.salary,
       created: this.state.salaryCreated
      }
      this.state.empDetails.push(obj);
    }

     if(this.state.employeeId !== '' || this.state.employeeId !== null) {
      let obj = {
        identifier: 'EmployeeId',
        title: this.state.employeeId,
       created: this.state.employeeIdCreated
      }
      this.state.empDetails.push(obj);
    }
    this.setState({ empDetails: this.state.empDetails });
  }
  
  render() { 
    const userName = this.props.location.query.userId;
    return (
      
      <div> 
      <form>
       
      
        <h2>Hey {userName} </h2>
      
       <div className="info">
        <label>
    Designation:
     </label>
            <input
              type="text"
              placeholder= "Enter Designation"
              value={this.state.designation}
              onChange={this.handleChange}
              name="designation"
            />
            </div>
            <div>
              <p><h3>{this.state.designation}</h3>  {this.state.designationCreated}</p>
            </div>
          
          <div className="info">
        <label>
    Salary:
     </label>
            <input
              type="text"
              placeholder="Enter Salary"
              value={this.state.salary}
              onChange={this.handleChange}
              name="salary"
            />

            </div>
              <div>
              <h3> NOTE : Salary should be in Integer only. </h3>
              <p><h3>{this.state.salary}</h3>  {this.state.salaryCreated}</p>
            </div>
        
 <div className="info">
        <label>
    Employee ID:
     </label>
            <input
              type="text"
              placeholder="Enter Employee ID"
              value={this.state.employeeId}
              onChange={this.handleChange}
              name="employeeId"
            />

            </div>
              <div>
              <p><h3>{this.state.employeeId}</h3>  {this.state.employeeIdCreated}</p>
            </div>
          
        
 

      </form>
        
       <Link to = "/">
      <button  type="submit" > Log Out </button>
                         
                            
                            </Link>
                            </div> 
    

    )
 
  }
}
 export default EmpDetails;
