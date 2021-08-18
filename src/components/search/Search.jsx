import React from 'react';

const SearchUser = ({ username, submitToMe, changeMe }) => {
  return (
    <form onSubmit={submitToMe}>
      <input value={username} onChange={changeMe} />
      <button>Look for user </button>
    </form>
  );
};

export default SearchUser;
