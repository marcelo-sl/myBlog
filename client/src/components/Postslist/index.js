import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

export default class Postslist extends Component {
    
    render() {
        const posts = [
            {
                id: Math.random(),
                title: 'ReactJS front to back',
                body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            },
            {
                id: Math.random(),
                title: 'React Native front to back',
                body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            },
            {
                id: Math.random(),
                title: 'NodeJS front to back',
                body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            },
        ];
        
        return (
            <div className="list-posts">
                <h1>Posts</h1>
                {posts.map(post => (
                    <div key={post.id} className="post">
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                        <Link className="link" to="">Read more</Link>
                    </div>
                ))}
            </div>
        );
    }
}