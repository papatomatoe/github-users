import * as React from "react";

const Search: React.FC<{ onSearch?: (value: string) => void }> = ({
  onSearch,
}) => {
  const [value, setValue] = React.useState("");
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);
  const searchHandler = () => onSearch && onSearch(value);
  return (
    <>
      <input type="search" value={value} onChange={changeHandler} />
      <button type="button" onClick={searchHandler}>
        Search User
      </button>
    </>
  );
};

export default Search;
