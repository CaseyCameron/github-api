/* eslint-disable max-len */
import React, { createContext, useContext, useState, useEffect } from 'react';
import { fetchGitHeads } from '../services/githubApi';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetchGitHeads(searchTerm).then(setUser);
  }, [searchTerm]);

  return (
    <UserContext.Provider
      value={{ searchTerm, setSearchTerm, user, setUser, repos, setRepos }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useSearchTerm = () => {
  const { searchTerm, setSearchTerm } = useContext(UserContext);

  return { searchTerm, setSearchTerm };
};

export const useUser = () => {
  const { user, setUser } = useContext(UserContext);

  return { user, setUser };
};

export const useRepos = () => {
  const { repos, setRepos } = useContext(UserContext);

  return { repos, setRepos };
};
