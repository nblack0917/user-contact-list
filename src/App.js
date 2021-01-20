import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import UserCard from './UserCard';

class App extends Component {
  constructor() {
    super();

    this.state = {
      arrayOfUsers: []
    }
  };

  componentDidMount() {
    axios.get('https://randomuser.me/api?results=25')
      .then( res => {
        const arrayOfUsers = res.data.results
        this.setState({ arrayOfUsers })
        // console.log(this.state.arrayOfUsers)
      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ul> {this.state.arrayOfUsers.map((user, i) => {
            return (
              <UserCard key={i} 
                user={user}
                />
            )
          })}
          </ul>
        </header>
      </div>
    );
  }
}

export default App;
