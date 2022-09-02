import React, { Component } from 'react';
import './App.css';

import SearchBox from './components/SearchBox';
import CardList from './components/CardList';

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
          <h1 className='heading-primary'>Monsters rolodex</h1>
        </header>
        <main>
          <SearchBox
            className='search-box'
            placeholder='Search monsters'
            onChangeHandler={handleSearchChange}
          />
          <CardList monsters={filteredMonsters} />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
