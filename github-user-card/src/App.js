import React from 'react';
import axios from 'axios';
import UserCard from './components/UserCard';
import Follower from './components/Follower'
import './App.css';

class App extends React.Component {
state = {
  userData: {},
  followers: []
}

componentDidMount() {
  axios.get(`https://api.github.com/users/matty-serwer`)
    .then(response => {
      this.setState({
        userData: response.data
      })
    })
    .catch(error => {
      console.log(error)
    })
  axios.get(`https://api.github.com/users/matty-serwer/followers`)
    .then(response => {
      this.setState({
        followers: response.data
      })
    })
    .catch(error => {
      console.log(error)
    })
}
render() {
  return (
    <div className='App'>
      <h1>Github User Card</h1>
      <UserCard userData={this.state.userData} />
      <h3>Followers:</h3>
      {this.state.followers.map(follower => {
        return <Follower followerData={follower} key={follower.login}/>
      })}
      
    </div>
  )
}
}

export default App;
