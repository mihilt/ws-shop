import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils.js';

import './sign-in.styles.scss';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = async event => {

    const{ email, password } = this.state;
    event.preventDefault();
    
    try{
      await auth.signInWithEmailAndPassword(email,password);
        this.setState({ email: '', password: '' });   
    }catch(error){
      console.log(error);
    }
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className='sign-in'>
        <h2>이미 계정이 있으신가요?</h2>
        <span>이메일과 비밀번호를 입력해주세요.</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            handleChange={this.handleChange}
            value={this.state.email}
            label='이메일'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='비밀번호'
            required
          />

          <div className = 'buttons'>          
            <CustomButton type='submit'> 로그인 </CustomButton>
            <CustomButton onClick = {signInWithGoogle} isGoogleSignIn>
            구글 로그인 
            </CustomButton>
          </div>


        </form>
      </div>
    );
  }
}

export default SignIn;