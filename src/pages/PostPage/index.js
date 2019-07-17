import React, { Component } from 'react';
import Searchbar from '../../components/Searchbar';
import Postslist from '../../components/Postslist';

import './styles.css';

export default class PostPage extends Component {
    render() {
        return (
            <aside>
                <Searchbar />
                <Postslist />
            </aside>
        );
    }
}      

