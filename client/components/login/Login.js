import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Formsy from 'formsy-react';
import FormsyText from 'formsy-material-ui/lib/FormsyText';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
	paperStyle: {
  		margin: window.innerHeight/3,
  		textAlign: 'center'
	},
	/*buttonStyle: {
		// marginRight: 60,
    padding: 50
	}*/
	inputStyle: {
		width: "100%"
	}

}
class Login extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			canSubmit: false
		}
	}
	enableButton() {
    	this.setState({
      		canSubmit: true
    });
  }


  disableButton() {
    this.setState({
      canSubmit: false
    });
  }

  submitForm(data) {
    // console.log(JSON.stringify(data, null, 4));
    this.context.router.replace({pathname: 'details', query: {userId: data.userName}});
  } 

	render() {
		return(
			<Paper zDepth={2} style={styles.paperStyle}>
			<Formsy.Form
                    onValid={this.enableButton.bind(this)}
                    onInvalid={this.disableButton.bind(this)}
                    onValidSubmit={this.submitForm.bind(this)}
                    
                  >
              
              			<FormsyText
                  			name="userName"
                  			validations="minLength:1"
                  			validationError="Enter User Name"
                  			required
                  			hintText="Enter User Name"
                  			floatingLabelText="User Name"
                  			style={styles.inputStyle}
                  			updateImmediately
                		/>

                    <FormsyText
                        name="userName"
                        validations="minLength:1"
                        validationError="Enter Password"
                        required
                        hintText="Enter Password"
                        floatingLabelText="Password"
                        style={styles.inputStyle}
                        updateImmediately
                    />

                    <RaisedButton
                            type="submit"
                            label="Submit"
                            primary={ true }
                             // style={styles.buttonStyle }
                            disabled={ !this.state.canSubmit } />
                          </Formsy.Form>
			</Paper>
		)
	}
}

export default Login;

Login.contextTypes = {
  router: React.PropTypes.object
};