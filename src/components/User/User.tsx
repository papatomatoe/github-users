import * as React from "react";

const User: React.FC<{
  user: {
    id: number;
    login: string;
    avatar: string;
    url: string;
    repos: string;
  };
}> = ({ user }) => {
  if (!user) return null;
  const { id, login, avatar, url } = user;
  return (
    <div key={id}>
      <a href={url} target="_blank" rel="noopener norefferer">
        <h2>{login}</h2>
      </a>
      <img src={avatar} alt={login + " avatar"} width="150" />
    </div>
  );
};

export default User;
