import React from "react";
import "./sign-in.styles.scss";
import FormInput from './../form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component'

import {signInWithGooggle} from '../../firebase/firebase.utils'
class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ email: "", password: "" });
  };

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            handleChange={this.handleChange}
             label='email'
            required
          />
           <FormInput
            type="password"
            name="password"
            handleChange={this.handleChange}
            value={this.state.password}
            label='password'
            required
          />
          <div className="buttons">
           <CustomButton type="submit" > Sign in</CustomButton>
           <CustomButton onClick={signInWithGooggle} isGooglesingIn> Sign in with Google</CustomButton>
           </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
