import { useEffect, useState } from "react";
import useQuery from "../Common/Hooks/useQuery";

const SearchBar = () => {
  const { replaceQueryParams, query } = useQuery();
  const [search, setSearch] = useState(query.search || "");
  useEffect(() => {
    console.log("data Query", query.search);
  }, [query.search]);
  return (
    <div className="search-conatiner">
      <input
        className="input"
        type="text"
        autoFocus
        value={search}
        onKeyUp={(e) => {
          console.log("test,", e);
          if (e.keyCode === 13) {
            replaceQueryParams({
              search: e.target.value === "" ? "" : e.target.value,
            });
          }
        }}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
    </div>
  );
};

export default SearchBar;
