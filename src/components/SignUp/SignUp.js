import React, {Component} from 'react';
import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import './SignUp.css';

class SignUp extends Component {
  constructor() {
    super();

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
  }

  handleSubmit = async e => {
    e.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
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

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className='sign-up'>
        <h2 className='title'>Nie masz jeszcze konta?</h2>
        <span>Stwórz konto za pomocą adresu email i hasła</span>
        <form className='sign-up-form' onSubmit={this.handleSubmit}>
        <label className="label">Imię:</label>
          <FormInput
            type='text'
            name='displayName'
            value={displayName}
            onChange={this.handleChange}
            required
          />
          <label className="label">E-mail:</label>
          <FormInput
            type='email'
            name='email'
            value={email}
            onChange={this.handleChange}
            required
          />
          <label className="label">Hasło:</label>
          <FormInput
            type='password'
            name='password'
            value={password}
            onChange={this.handleChange}
            required
          />
          <label className="label">Powtórz hasło:</label>
          <FormInput
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={this.handleChange}
            required
          />
          <Button type='submit'>Zarejestruj się</Button>
        </form>
      </div>
    );
  }
}

export default SignUp;