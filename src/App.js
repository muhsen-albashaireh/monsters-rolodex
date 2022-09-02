import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: [],
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(monsters => {
        this.setState({ monsters }, () => console.log('monsters updated'));
      });
  }

  render() {
    return <div>Monsters Rolodex</div>;
  }
}

export default App;
