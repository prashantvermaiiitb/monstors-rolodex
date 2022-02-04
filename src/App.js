import React, { Component } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search/search.component';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monstors: [],
      searchInput: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(users => this.setState({ monstors: [...users] }));
  }
  render() {

    const { monstors, searchInput } = this.state;
    const filteredMonstors = monstors.filter(monstor => monstor.name.toLowerCase().includes(searchInput.toLocaleLowerCase()))

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder={'enter search text'} handleChange={e => this.setState({ searchInput: e.target.value })} />
        {filteredMonstors.length > 0 ? <CardList monstors={filteredMonstors} /> : <p>Please update search criteria.</p>}
      </div>

    );
  }
}

export default App;
