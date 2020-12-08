import React, {Component} from 'react';
import Button from '../Button/Button';
import FormInput from '../FormInput/FormInput';
import './SignIn.css'
class SignIn extends Component {
    constructor(props) {
        super(props)
   
        this.state = {
            email: '',
            password: ''
        }
    }


    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({email: '', password: ''})
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
                <FormInput name="email" type="email" value={this.state.email} onChange={this.handleChange} required />
                <label className="label">Hasło</label>
                <FormInput name="password" type="password" value={this.state.password} onChange={this.handleChange} required />
                
                <Button type="submit">Zaloguj</Button>
                </form>
            </div>
        )

    }
    
}

export default SignIn