import React, { Component } from "react";

import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import { Searchfield } from "./components/search/search_field.component";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      string: "Github Profile Search",
      users: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://api.github.com/users")
      .then((data) => data.json())
      .then((users) => this.setState({ users: users }));
  }
  render() {
    const { users, searchField } = this.state;
    console.log(searchField)
    const filterValue = users.filter((user) =>
      user.login.toLowerCase().includes(searchField)
    );
    return (
      <div className="App">
        <h1 className="margin_botton">{this.state.string}</h1>
        <Searchfield
          handleChange={(e) => {
            this.setState({ searchField: e.target.value });
          }}
          placeholder="Search Field"
        />
        <CardList filterValue={filterValue} />
      </div>
    );
  }
}

export default App;
