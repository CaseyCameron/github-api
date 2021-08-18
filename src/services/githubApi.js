export const fetchGitHeads = async (username) => {
  const user = await fetch(`https://api.github.com/users/${username}`);
  const json = await user.json();

  return json;
};

export const fetchGitRepos = async (username) => {
  const user = await fetch(`https://api.github.com/users/${username}/repos`);
  const json = await user.json();

  return json;
};
