import React from 'react';
import { useRepos } from '../../state/UserProvider';
import Repo from './Repo';

const RepoList = () => {
  const { repos } = useRepos();

  const repoElements = repos.map((repo) => {
    console.log(repo);
    return (
      <li key={repo.id}>
        <Repo {...repo} />
      </li>
    );
  });

  return (
    <>
      <h2>Repos</h2>
      <ul>{repoElements}</ul>
    </>
  );
};

export default RepoList;
