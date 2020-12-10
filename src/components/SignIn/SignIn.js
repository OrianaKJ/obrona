import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import Button from '../Button/Button';
import FormInput from '../FormInput/FormInput';
import {auth, signInWithGoogle} from '../../firebase/firebase.utils'
import './SignIn.css';

class SignIn extends Component {
    constructor(props) {
        super(props)
   
        this.state = {
            email: '',
            password: ''
        }
    }


    handleSubmit = async e => {
        e.preventDefault();
        const {email, password} = this.state;

        try{
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({email: '', password: ''})
        } catch (error) {
            console.log(error);
        }

    }

    handleChange = (e) => {
        const {value, name} = e.target;
        this.setState({[name]: value})
    }

    render() {
        return(
            <div className="signin">
                <h2>Mam już swoje konto</h2>
                <span>Zaloguj się za pomocą swojego e-maila oraz hasła</span>


                <form onSubmit={this.handleSubmit}>
                <label className="label">E-mail:</label>
                <FormInput 
                    name="email" 
                    type="email" 
                    value={this.state.email} 
                    onChange={this.handleChange} 
                    required />
                <label className="label">Hasło</label>
                <FormInput 
                    name="password" 
                    type="password" 
                    value={this.state.password} 
                    onChange={this.handleChange} 
                    required />
                <Link className="login"  to='/'>
                    
               </Link>
               <Button type="submit">Zaloguj</Button>
               <Button onClick={signInWithGoogle} isGoogleSignIn>Zaloguj za pomocą Google</Button>
               </form>
            </div>
        )

    }
    
}

export default SignIn