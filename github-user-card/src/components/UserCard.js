import React, { Component } from 'react';
import Followers from './Followers';

export default class UserCard extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <h3>{this.props.userData.name}</h3>
            </div>
        )
    }
}
