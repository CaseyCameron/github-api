/* eslint-disable max-len */
import React from 'react';

const SearchUser = ({ username, submitToMe, changeMe }) => {

  return (
    <form onSubmit={submitToMe}>
      <input value={username} onChange={changeMe} placeholder="Enter a username" />
      <button>Look for user</button>
    </form>
  );
};

export default SearchUser;
