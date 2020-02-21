import React from 'react';

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

import {IAppState} from "./typings";
import {users} from "./data";

const AppDefaultState: IAppState = {
  filters: {
    text: '',
    favouriteOnly: false,
  },
  users: users,
  filteredUsers: users,
}

const App = () => {
  const [state, setState] = React.useState<IAppState>(AppDefaultState);

  const getUser = (id) => {
    return state.users.find(user => user.id.toString() === id);
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
    const newFilters = {
      ...state.filters,
      text: value,
    };

    setState((prevState) => ({
      ...prevState,
      filters: newFilters,
    }));
  };

  const toggleFavourite = () => {
    setState(prevState => ({
        ...prevState,
        filters: {
          ...prevState.filters,
          favouriteOnly: !prevState.filters.favouriteOnly,
        }
    }))
  }

  const toggleUserFavourite = (id) => {
    console.log('toggled');
    const newUsers = state.users.map(user => user.id === id ? {...user, isFavourite: !user.isFavourite} : user);

    setState((prevState => ({
      ...prevState,
      users: newUsers,
    })))
  };

  return (
    <Router>
        <Header />
        <Container isMain={true}>
          <Switch>
            <Route path="/detail/:id">
              <DetailView getUser={getUser} toggleFavourite={toggleUserFavourite} />
            </Route>
            <Route path="/about">
              <AboutView/>
            </Route>
            <Route path="/">
              <HomeView
                  users={getFilteredUsers(state.users, state.filters)}
                  showOnlyFavourite={state.filters.favouriteOnly}
                  setTextFilter={setTextFilter}
                  toggleUserFavourite={toggleUserFavourite}
                  toggleFavourite={toggleFavourite}
              />
            </Route>
          </Switch>
        </Container>
    </Router>
  );
};

export default App;
