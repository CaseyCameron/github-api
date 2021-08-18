/* eslint-disable max-len */
import React from 'react';
import { useSearchTerm } from '../../state/UserProvider';

const SearchUser = () => {
  const { searchTerm, setSearchTerm } = useSearchTerm();
  let searchValue;

  const handleChange = ({ target }) => {
    searchValue = target.value;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(searchValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={searchValue} onChange={handleChange} placeholder="Enter a username" />
      <button>Look for user</button>
    </form>
  );
};

export default SearchUser;
