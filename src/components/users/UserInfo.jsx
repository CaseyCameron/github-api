import React from 'react';
import { useUser } from '../../state/UserProvider';

const UserInfo = () => {
  const { user } = useUser();
  return (
    <>
      <h2>rendering userInfo</h2>
      <p>Login: {user.login}</p>
      <p>Name: {user.name}</p>
      <p>Followers: {user.followers}</p>
      <p>Following: {user.following}</p>
      <p>Profile: {user.url}</p>
    </>
  );
};

export default UserInfo;
