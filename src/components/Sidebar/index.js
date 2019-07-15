import React, { Component } from 'react';
import Searchbar from '../Searchbar';
import Postslist from '../Postslist';

import './styles.css';

export default class Sidebar extends Component {
    render() {
        return (
            <aside>
                <Searchbar />
                <Postslist />
            </aside>
        );
    }
}      

