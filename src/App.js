import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: [],
      searchQuery: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(monsters => {
        this.setState({ monsters }, () => console.log('monsters updated'));
      });
  }

  handleSearchChange = e => {
    this.setState({
      searchQuery: e.target.value,
    });
  };

  render() {
    const { monsters, searchQuery } = this.state;
    const { handleSearchChange } = this;
    const filteredMonsters = monsters.filter(monster => {
      const query = searchQuery.toLowerCase();
      const name = monster.name.toLowerCase();

      return name.includes(query);
    });

    return (
      <React.Fragment>
        <header>
          <h1>Monsters rolodex</h1>
        </header>
        <main>
          <input
            type='search'
            placeholder='Search for a monster'
            onChange={handleSearchChange}
            value={searchQuery}
          />
          <ul className='monsters-list'>
            {filteredMonsters.map(monster => (
              <li key={monster.id}>{monster.name}</li>
            ))}
          </ul>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
