import * as React from "react";

interface Props {
  repos?: Array<{
    id: number;
    name: string;
    url: string;
    createdDate: string;
  }>;
}

const Repos: React.FC<Props> = ({ repos }) => {
  if (!repos) return null;
  return (
    <>
      {repos.map(({ id, name, url, createdDate }, index) => (
        <div key={id}>
          <h3>
            <span>{index + 1})&nbsp;</span>
            <a href={url} target="_blank" rel="noopener norefferer">
              {name}
            </a>
          </h3>
          <p>{new Date(createdDate).toLocaleDateString()}</p>
        </div>
      ))}
    </>
  );
};

export default Repos;
