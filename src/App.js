import React from 'react';
import './App.css';

import SearchBox from './components/SearchBox';
import CardList from './components/CardList';

const App = () => {
  const [monsters, setMonsters] = React.useState([]);
  const [filteredMonsters, setFilteredMonsters] = React.useState(monsters);
  const [searchQuery, setSearchQuery] = React.useState('');

  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(monsters => {
        setMonsters(monsters);
      });
  }, []);

  React.useEffect(() => {
    const newFilteredMonsters = monsters.filter(monster => {
      const query = searchQuery.toLowerCase();
      const name = monster.name.toLowerCase();

      return name.includes(query);
    });

    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchQuery]);

  const handleSearchChange = e => {
    setSearchQuery(e.target.value);
  };

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
};

export default App;
