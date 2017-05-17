import React from 'react';
class DocumentInput extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: ''
		}
	}
	handleChange = (event) => {
		this.setState({value: event.target.value});
		this.props.submitValues(this.state.value);
	}
  render() {
    return <input 
      type="text" 
      name={ `document-${ this.props.index }-document` }
      onChange={this.handleChange}
    />;
  }
}

export default DocumentInput;