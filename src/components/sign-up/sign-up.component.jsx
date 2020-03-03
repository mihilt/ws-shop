import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.styles.scss';

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("비밀번호가 일치하지 않습니다");
      return;
    }

    console.log(password.length);

    if(password.length<5 || confirmPassword.length<5){
      alert("비밀번호를 6자리 이상으로 작성해주세요.")
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className='sign-up'>
        <h2 className='title'>계정이 없으신가요?</h2>
        <span>계정을 만들기 위해 이메일과 비밀번호를 입력해주세요.</span>
        <form className='sign-up-form' onSubmit={this.handleSubmit}>
          <FormInput
            type='text'
            name='displayName'
            value={displayName}
            onChange={this.handleChange}
            label='이름'
            required
          />
          <FormInput
            type='email'
            name='email'
            value={email}
            onChange={this.handleChange}
            label='이메일'
            required
          />
          <FormInput
            type='password'
            name='password'
            value={password}
            onChange={this.handleChange}
            label='비밀번호'
            required
          />
          <FormInput
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={this.handleChange}
            label='비밀번호 확인'
            required
          />
          <CustomButton type='submit'>회원가입</CustomButton>
        </form>
      </div>
    );
  }
}
// 얘 비밀번호 6자리 이상 안하면 POST 400 오류 뜨면서 firebase auth/weak-password 콘솔창에 오류뜨는데 
// 예외사항 추가하자

//회원가입 완료시에 시각적 효과로 회원가입이 완료되었음을 사용자에게 알리자. 생각해보고 정 안되면  alert로 그냥 추가 ㄱㄱ

//로그인 후에 메인 페이지로 넘어가던가 하는 것도 생각 

export default SignUp;