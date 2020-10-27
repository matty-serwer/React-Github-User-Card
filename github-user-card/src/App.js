import React from 'react';
import axios from 'axios';
import UserCard from './components/UserCard';
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
      console.log(this.state.userData)
    })
    .catch(error => {
      console.log(error)
    })
}
render() {
  return (
    <div className='App'>
      <h1>Github User Cards</h1>
      <UserCard userData={this.state.userData}/>
    </div>
  )
}
}

export default App;
