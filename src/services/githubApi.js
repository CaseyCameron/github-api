import 

export const fetchGitHeads = async (username) => {
  const user = await fetch(`https://api.github.com/users/${username}`);
  const json = await user.json();
  console.log(json);
  return json;
};

export const fetchGitRepos = async (username) => {
  const user = await fetch(`https://api.github.com/users/${username}/repos`, {
    headers: {
      authorization: `token ${process.env.GIT_AUTH}`
    }
  });
  const json = await user.json();

  console.log(json);
  return json;
};
