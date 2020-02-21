import React, {useEffect} from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Container from "./components/container/container";
import Header from "./components/header/header";

import HomeView from "./views/home";
import AboutView from "./views/about";
import DetailView from "./views/detail";
import {IUser} from "./typings";

const App = () => {
  const [users, setUsers] = React.useState<IUser[]>([]);
  const [filters, setFilters] = React.useState({text: '', favouriteOnly: false});

  useEffect(() => {
    fetch('http://localhost:3003/users/')
        .then(res => res.json())
        .then(response => {
          setUsers(response);
        })
  })

  const changeUser = (user) => {
    fetch(`http://localhost:3003/users/${user.id}`, {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user)
    })
  };

  const getFilteredUsers = (users, filters) => {
    return users.filter(user => {
      const userName = `${user.firstName} ${user.lastName}`.toLowerCase();

      if (filters.favouriteOnly && !user.isFavourite) {
        return false;
      }

      return userName.includes(filters.text);
    })
  };

  const setTextFilter = (value: string) => {

    setFilters((prevState) => ({
      ...prevState,
      text: value,
    }));
  };

  const toggleFavourite = () => {
    setFilters((prevState) => ({
      ...prevState,
      favouriteOnly: !prevState.favouriteOnly,
    }));
  }

  return (
    <Router>
        <Header />
        <Container isMain={true}>
          <Switch>
            <Route path="/detail/:id">
              <DetailView changeUser={changeUser} />
            </Route>
            <Route path="/about">
              <AboutView/>
            </Route>
            <Route path="/">
              <HomeView
                  users={getFilteredUsers(users, filters)}
                  showOnlyFavourite={filters.favouriteOnly}
                  setTextFilter={setTextFilter}
                  changeUser={changeUser}
                  toggleFavourite={toggleFavourite}
              />
            </Route>
          </Switch>
        </Container>
    </Router>
  );
};

export default App;
