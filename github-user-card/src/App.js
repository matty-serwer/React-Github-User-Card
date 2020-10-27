import React from 'react';
import axios from 'axios';
import UserCard from './components/UserCard';
import Follower from './components/Follower'
import './App.css';

class App extends React.Component {
state = {
  userData: {},
  followers: [],
  userSearch: ""
}

getUser = (user) => {
  axios.get(`https://api.github.com/users/${user}`)
  .then(response => {
    this.setState({
      userData: response.data
    })
  })
  .catch(error => {
    console.log(error)
  })
}

getFollowers = (user) => {
  axios.get(`https://api.github.com/users/${user}/followers`)
    .then(response => {
      this.setState({
        followers: response.data
      })
    })
    .catch(error => {
      console.log(error)
    })
}

componentDidMount() {
  this.getUser('matty-serwer')
  this.getFollowers('matty-serwer')
  // axios.get(`https://api.github.com/users/matty-serwer`)
  //   .then(response => {
  //     this.setState({
  //       userData: response.data
  //     })
  //   })
  //   .catch(error => {
  //     console.log(error)
  //   })
  // axios.get(`https://api.github.com/users/matty-serwer/followers`)
  //   .then(response => {
  //     this.setState({
  //       followers: response.data
  //     })
  //   })
  //   .catch(error => {
  //     console.log(error)
  //   })
}

handleChange = (e) => {
  this.setState({ userSearch: e.target.value})
  // console.log(this.state.userSearch)
}

handleSubmit = (e) => {
  e.preventDefault();
  this.getUser(this.state.userSearch);
  this.getFollowers(this.state.userSearch);
  // axios.get(`https://api.github.com/users/${this.state.userSearch}`)
  //   .then(response => {
  //     this.setState({
  //       userData: response.data
  //     })
  //   })
  //   .catch(error => {
  //     console.log(error)
  //   })
}

clickHandler = (e) => {
  console.log(e.target.textContent)
  this.getUser(e.target.textContent)
  this.getFollowers(e.target.textContent)
}

render() {
  return (
    <div className='App'>
      <form onSubmit={this.handleSubmit}>
        <label className='search'>
          Search
        <input value={this.state.userSearch} onChange={this.handleChange} type='text' />
        </label>
        <button className='submit'>Search</button>
      </form>
      <h1>Github User Card</h1>
      <UserCard userData={this.state.userData} />
      <h3>Followers:</h3>
      {this.state.followers.map(follower => {
        return <Follower followerData={follower} key={follower.login} clickHandler={this.clickHandler}/>
      })}
      
    </div>
  )
}
}

export default App;
