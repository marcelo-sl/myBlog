import React, { Component } from 'react';

import './styles.css';

export default class Searchbar extends Component {
    render() {
        return (
            <form>
                <input type="text" className="input-search" placeholder="Type something.."/>
                <input type="submit" className="input-btn" value="Search" />
            </form>
        );
    }
}