import React, { Component } from 'react';
import { Card, CardTitle } from 'reactstrap'


export default class UserCard extends Component {
    constructor() {
        super();
    }
   
    render() {
        return (
            <Card color='primary' className='card'>
                <CardTitle className="display-4">{this.props.userData.name}</CardTitle>
                <img src={this.props.userData.avatar_url} alt={this.props.userData.avatar_url} />
                <p>Bio: {this.props.userData.bio}</p>
                <a href={this.props.userData.html_url}>{this.props.userData.html_url}</a>
            </Card>
        )
    }
}
