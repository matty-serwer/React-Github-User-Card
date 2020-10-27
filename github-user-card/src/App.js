import React from "react";
import axios from "axios";
import { Button, Input, Container, Form, Row, Col } from "reactstrap";
import UserCard from "./components/UserCard";
import Follower from "./components/Follower";
import "./App.css";

class App extends React.Component {
  state = {
    userData: {},
    followers: [],
    userSearch: "",
  };

  getUser = (user) => {
    axios
      .get(`https://api.github.com/users/${user}`)
      .then((response) => {
        this.setState({
          userData: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  getFollowers = (user) => {
    axios
      .get(`https://api.github.com/users/${user}/followers`)
      .then((response) => {
        this.setState({
          followers: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  componentDidMount() {
    this.getUser("matty-serwer");
    this.getFollowers("matty-serwer");
  }

  handleChange = (e) => {
    this.setState({ userSearch: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.getUser(this.state.userSearch);
    this.getFollowers(this.state.userSearch);
  };

  clickHandler = (e) => {
    this.getUser(e.target.textContent);
    this.getFollowers(e.target.textContent);
  };

  render() {
    return (
      <Container className='App'>
        <h1 className='display-3'>Github User Card</h1>
        <Container id='body-container'>
          <Form onSubmit={this.handleSubmit}>
            <Input
              value={this.state.userSearch}
              onChange={this.handleChange}
              type='text'
              id='userSearch'
            />

            <Button color='primary' className='submit'>
              Search
            </Button>
          </Form>
          <Row>
            <Col>
              <UserCard userData={this.state.userData} />
            </Col>
            <Col className='followers'>
              <h3>Followers:</h3>
              {this.state.followers.map((follower) => {
                return (
                  <Follower
                    followerData={follower}
                    key={follower.login}
                    clickHandler={this.clickHandler}
                  />
                );
              })}
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
}

export default App;
