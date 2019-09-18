import React, {useState} from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    };

    login = e => {
        e.preventDefault();
        axiosWithAuth().post('/login', this.state.credentials)
        .then(res => {
            console.log(res);
            localStorage.setItem('token', res.data.payload);
            this.props.history.push('/friendslist');
        })
        .catch(err => console.log(err));
    };

    handleChange = event => {
        console.log(event.target.value);
        this.setState({
            credentials: {
                ...this.state.credentials,
                [event.target.name]: event.target.value,
            }
            })
    };
    render() {
        return (
            <div className="login-form">
                <form className="form-elements" onSubmit={this.login}>
                    <h2>Welcome Back</h2>
                    Username:
                    <input type="text" name="username" value={this.state.credentials.username} onChange={this.handleChange}></input>
                    Password:
                    <input type="text" name="password" value={this.state.credentials.password} onChange={this.handleChange}></input>
                    <button type="submit">Log In!</button>
                </form>
            </div>
        )
    
    }
}

export default Login;