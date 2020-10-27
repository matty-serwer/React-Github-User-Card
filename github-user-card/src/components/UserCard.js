import React, { Component } from 'react';


export default class UserCard extends Component {
    constructor() {
        super();
    }
   
    render() {
        return (
            <div className='card user-card'>
                <h3 className='card-name'>{this.props.userData.name}</h3>
                <img src={this.props.userData.avatar_url} alt={this.props.userData.avatar_url} />
                <p>Bio: {this.props.userData.bio}</p>
                <a href={this.props.userData.html_url}>{this.props.userData.html_url}</a>
            </div>
        )
    }
}
