import React from 'react';
import { useRepo } from '../../state/UserProvider';
import Repo from './Repo';

const RepoList = () => {
  const repo = useRepo();
  console.log(repo);

  return (
    <>
      <h1>Repos</h1>
      <Repo />
    </>
  );
};

export default RepoList;
