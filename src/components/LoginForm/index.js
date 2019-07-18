import React, { Component } from 'react';
 
import './styles.css';

export default class LoginForm extends Component {
    state = {
        email: '',
        password: '',
        forgot: false
    }

    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    checkChange = e => {
        this.setState({
            [e.target.name]: e.target.checked
        });
    }

    render() {
        return (
                <form className="login-form">
                    <h2>Sign in</h2>
                    <div className="inputs">
                        <label>Email:
                            <input 
                                className="input-text"
                                name="email"
                                type="text" 
                                placeholder="example@example.com"
                                value={this.state.email}
                                onChange={e => this.change(e)}  
                            />
                            </label>
                        <br />
                        <label>Password:
                            <input 
                                className="input-text"
                                name="password"
                                type="password" 
                                value={this.state.password}
                                onChange={e => this.change(e)}  
                            />
                        </label>
                        <br />
                        <label>
                            <input 
                                type="checkbox"
                                name="forgot"
                                checked={this.state.forgot}
                                onChange={e => this.checkChange(e)}
                            />
                            Forget my password
                        </label>
                        <br />
                        <input id="btn-submit-login" type="submit" value="Login" />
                    </div>
                </form>
        );
    }

}