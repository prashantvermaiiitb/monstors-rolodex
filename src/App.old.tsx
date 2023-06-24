import { Component } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search/search.component";
import { getData } from "./utils/data.utils";

export type Monstors = {
  id: string;
  name: string;
  email: string;
  address: string;
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monstors: [],
      searchInput: "",
    };
  }

  componentDidMount() {
    const getUsers = async () => {
      const url = "https://jsonplaceholder.typicode.com/users";
      const users = await getData<Monstors[]>(url);
      /**
       * Never is a special type and it's opposite of any 
       * it means nothing can get assigned to NEVER type
       * it means you are defending your codebase and defining types.
       */
      this.setState({ monstors: [...users] });
    };
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((response) => response.json())
    //   .then((users) => this.setState({ monstors: [...users] }));
  }
  render() {
    console.log("rendered....");
    const { monstors, searchInput } = this.state;
    const filteredMonstors = monstors.filter((monstor) =>
      monstor.name.toLowerCase().includes(searchInput.toLocaleLowerCase())
    );

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder={"enter search text"}
          handleChange={(e) => this.setState({ searchInput: e.target.value })}
        />
        {filteredMonstors.length > 0 ? (
          <CardList monstors={filteredMonstors} />
        ) : (
          <p>Please update search criteria.</p>
        )}
      </div>
    );
  }
}

export default App;
