import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../header/Header';
import UserInfo from '../users/UserInfo';

export default function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={UserInfo} />
      </Switch>
    </>
  );
}
