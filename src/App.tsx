import * as React from "react";
import Search from "components/Search";
import User from "components/User";
import Repos from "components/Repos";
import { useReposApi, useUserApi } from "hooks/apiHooks";

const App = () => {
  const [userName, setUserName] = React.useState<string>("papatomatoe");

  const [user, loadingUser, userError] = useUserApi(userName);
  const [repos, loadingRepos, reposError] = useReposApi(userName);

  if (userError || reposError) return <p>Something went wrong...</p>;
  return (
    <>
      <Search onSearch={setUserName} />
      {loadingUser ? <p>Loading...</p> : <User user={user} />}
      {loadingRepos ? <p>Loading...</p> : <Repos repos={repos} />}
    </>
  );
};

export default App;
