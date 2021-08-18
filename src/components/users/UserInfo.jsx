import React from 'react';
import { useHistory } from 'react-router-dom';
import { fetchGitRepos } from '../../services/githubApi';
import { useUser, useSearchTerm, useRepos } from '../../state/UserProvider';

const UserInfo = () => {
  const { user } = useUser();
  const { searchTerm } = useSearchTerm();
  const { setRepos } = useRepos();
  const history = useHistory();

  const handleClick = () => {
    fetchGitRepos(searchTerm)
      .then(setRepos)
      .then(history.push(`/${user.login}/repos`));
  };
  return (
    <>
      <h2>rendering userInfo</h2>
      <img src={user.avatar_url} alt={user.login} />
      <p>Login: {user.login}</p>
      <p>Name: {user.name}</p>
      <p>Followers: {user.followers}</p>
      <p>Following: {user.following}</p>
      <p>Profile: {user.url}</p>
      <button onClick={handleClick}>View Repos</button>
    </>
  );
};

export default UserInfo;
