import React, { Component } from 'react';

import './styles.css';

export default class Postslist extends Component {
    
    render() {
        const posts = [
            {
                id: Math.random(),
                title: 'ReactJS front to back'
            },
            {
                id: Math.random(),
                title: 'React Native front to back'
            },
            {
                id: Math.random(),
                title: 'NodeJS front to back'
            },
        ];
        
        return (
            <div className="list-posts">
                <h3>Posts</h3>
                {posts.map(post => (
                    <div key={post.id} className="post">
                        <p><a href="#" >{post.title}</a></p>
                    </div>
                ))}
            </div>
        );
    }
}