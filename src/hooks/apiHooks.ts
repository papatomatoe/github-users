import * as React from "react";

export const useUserApi = (userName: string) => {
  const [user, setUser] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    if (userName) {
      setLoading(true);
      fetch(`https://api.github.com/users/${userName}`)
        .then((resp) => resp.json())
        .then((user) =>
          setUser({
            id: user.id,
            login: user.login,
            url: user.html_url,
            avatar: user.avatar_url,
            repos: user.repos_url,
          })
        )
        .catch((e) => setError(e))
        .finally(() => setLoading(false));
    }
  }, [userName]);

  return [user, loading, error];
};

export const useReposApi = (userName: string) => {
  const [repos, setRepos] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    fetch(`https://api.github.com/users/${userName}/repos`)
      .then((resp) => resp.json())
      .then((repos) => {
        setRepos(
          repos.map(
            ({
              id,
              created_at,
              name,
              html_url,
            }: {
              id: number;
              created_at: string;
              name: string;
              html_url: string;
            }) => ({
              id: id,
              createdDate: created_at,
              name: name,
              url: html_url,
            })
          )
        );
      })
      .catch((e) => setError(e))
      .finally(() => setLoading(false));
  }, [userName]);

  return [repos, loading, error];
};
