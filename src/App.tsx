import { ChangeEvent, Component, useEffect, useState } from "react";
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

const App = () => {
  // if you have not given type for the array TS will not define that
  // so that will be NEVER type
  const [monstors, setMonstors] = useState<Monstors[]>([]);
  const [searchInput, setSearchInput] = useState("");
  const [filteredMonstors, setFilteredMonstors] = useState(monstors);

  useEffect(() => {
    const getUsers = async () => {
      const url = "https://jsonplaceholder.typicode.com/users";
      const users = await getData<Monstors[]>(url);
      /**
       * Never is a special type and it's opposite of any
       * it means nothing can get assigned to NEVER type
       * it means you are defending your codebase and defining types.
       */
      setMonstors(users);
    };
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((response) => response.json())
    //   .then((users) => this.setState({ monstors: [...users] }));
    getUsers();
  }, []);

  useEffect(() => {
    const newFilteredMonstors = monstors.filter((monstor) =>
      monstor.name.toLowerCase().includes(searchInput.toLocaleLowerCase())
    );
    setFilteredMonstors(newFilteredMonstors);
  }, [monstors, searchInput]);

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const searchField = event.target.value.toLowerCase();
    setSearchInput(searchField);
  };

  return (
    <div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchBox
        className="hello"
        placeholder={"enter search text"}
        handleChange={onSearchChange}
      />
      {filteredMonstors.length > 0 ? (
        <CardList monstors={filteredMonstors} />
      ) : (
        <p>Please update search criteria.</p>
      )}
    </div>
  );
};

export default App;
