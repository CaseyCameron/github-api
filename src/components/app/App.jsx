import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../header/Header';
import RepoList from '../repos/RepoList';
import UserInfo from '../users/UserInfo';

export default function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={UserInfo} />
        <Route exact path="/:user/repos" component={RepoList} />
      </Switch>
    </>
  );
}
