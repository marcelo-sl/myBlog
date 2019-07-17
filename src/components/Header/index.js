import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

export default class Header extends Component {
    render() {
        return (
            <div className="header-container">
                <Link id="title" className="link" to="/"><h1>MyBlog</h1></Link>
                <ul className="header-links">
                    <Link className="link" to="/Posts"><li>Posts</li></Link>
                    <Link className="link" to="/account/sign-in"><li id="sign-in">Sign in</li></Link>
                    <Link className="link" to="/account/sign-up"><li id="sign-up">Sign up</li></Link>
                </ul>
            </div>
        );
    }
}