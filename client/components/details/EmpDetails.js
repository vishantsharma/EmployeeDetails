import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';

class EmpDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      empDetails: [{ name: '' }],
    };
  }
  
  handleNameChange = (evt) => {
    this.setState({ name: evt.target.value });
  }
  
  handleChange = (index) => (evt) => {
    const newDetails = this.state.empDetails.map((detail, sidx) => {
      // console.log(detail);

      if (index !== sidx) return detail;
      // console.log(detail);
      return { ...detail, name: evt.target.value };
      
    });
    
    this.setState({ empDetails: newDetails });
  }
  
  
  handleAdd = () => {
    this.setState({ empDetails: this.state.empDetails.concat([{ name: '' }]) });
  }
  
  handleRemove = (index) => () => {
    this.setState({ empDetails: this.state.empDetails.filter((s, sidx) => index !== sidx) });
  }
  
  render() { 
    return (
    <Tabs>
      <Tab label="Home" >
      <form>
        
      
        <h4>Enter Employee Details</h4>
      
        {this.state.empDetails.map((detail, index) => (
          <div className="info">
            <input
              type="text"
              placeholder={`Enter Detail #${index + 1} `}
              value={detail.name}
              onChange={this.handleChange(index)}
            />
            <button type="button" onClick={this.handleRemove(index)} className="small">Remove</button>
          </div>
        ))}
        <button type="button" onClick={this.handleAdd} className="small">Add Field</button>
      </form>
      </Tab>

      <Tab label="Profile" >
      <div>
        <h4>Employee Details</h4>
        <ul>
          {this.state.empDetails.map((detail, index) => (
            <li key={index}>{detail.name}</li>
            ))}
        </ul>
      </div>
    </Tab>
   

       <Link to = "/">
      <RaisedButton
                            type="submit"
                            label="Log Out"
                            // style={{paddingRight:100}}
                            // <Link to="/" />
                            primary={ true } />
                            
                            </Link>
 
      </Tabs>

    )
 
  }
}
 export default EmpDetails;
