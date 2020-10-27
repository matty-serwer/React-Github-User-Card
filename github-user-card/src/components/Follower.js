import React, { Component } from 'react'

export default class Follower extends Component {
    constructor() {
        super();
    }


    render() {
        return (
            <div className='followers'>
                <h4 className='card-name'>{this.props.followerData.login}</h4>
            </div>
        )
    }
}
