import React, { Component } from 'react'

export default class Follower extends Component {
    constructor() {
        super();
    }

    handleClick = (e) => this.props.clickHandler(e)

    render() {
        return (
            <div className='follower' onClick={this.handleClick}>
                <h4 className='card-name'>{this.props.followerData.login}</h4>
            </div>
        )
    }
}
