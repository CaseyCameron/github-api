/* eslint-disable max-len */
import React, { createContext, useContext, useState, useEffect } from 'react';
import { fetchGitHeads, fetchGitRepos } from '../services/githubApi';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetchGitHeads(searchTerm)
      .then(setUser);
    fetchGitRepos(searchTerm)
      .then(setRepos);
  }, [searchTerm]); 


  return (<UserContext.Provider value={{ searchTerm, setSearchTerm, user, setUser, repos }}>{children}</UserContext.Provider>);
};

export const useSearchTerm = () => {
  const { searchTerm, setSearchTerm } = useContext(UserContext);

  return { searchTerm, setSearchTerm };
};

export const useUser = () => {
  const { user, setUser } = useContext(UserContext);

  return { user, setUser };
};

export const useRepo = () => {
  const { repos } = useContext(UserContext);

  return repos;
};
