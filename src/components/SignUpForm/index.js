import React, { Component } from 'react';
 
import './styles.css';

export default class SignUpForm extends Component {
    state = {
        email: '',
        name: '',
        password: '',
        receive: true
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
        console.log(e.target.checked);
    }

    render() {
        return (
                <form className="login-form">
                    <h2>Create an account</h2>
                    <div className="inputs">
                        <label>Name:
                            <input 
                                className="input-text"
                                name="name"
                                type="text" 
                                placeholder="First Name"
                                value={this.state.name}
                                onChange={e => this.change(e)}  
                            />
                        </label>
                        <br />
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
                                name="receive"
                                checked={this.state.receive}
                                onChange={e => this.checkChange(e)}
                            />
                            Receive on email notice about blog's new posts!  
                        </label>
                        <br />
                        <input id="btn-submit-create" type="submit" value="Create" />
                    </div>
                </form>
                
        );
    }

}