import { useContext } from "react";
import { QueryContext } from "./Context";

const useQuery = () => {
  const { query, replaceQueryParams } = useContext(QueryContext);

  return { query, replaceQueryParams };
};

export default useQuery;
