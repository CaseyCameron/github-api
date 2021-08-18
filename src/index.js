import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/app/App';
import { UserProvider } from './state/UserProvider';

render(
  
  <Router>
    <UserProvider>
      <App />
    </UserProvider>    
  </Router>,

  document.getElementById('root')
);
