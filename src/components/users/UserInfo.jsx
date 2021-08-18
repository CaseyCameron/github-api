import React from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../../state/UserProvider';

const UserInfo = () => {
  const { user } = useUser();
  return (
    <>
      <h2>rendering userInfo</h2>
      <img src={user.avatar_url} alt={user.login} />
      <p>Login: {user.login}</p>
      <p>Name: {user.name}</p>
      <p>Followers: {user.followers}</p>
      <p>Following: {user.following}</p>
      <p>Profile: {user.url}</p>
      <Link to={`/${user.login}/repos`}>Check out {user.login}'s Repos</Link>
    </>
  );
};

export default UserInfo;
