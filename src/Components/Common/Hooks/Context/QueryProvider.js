import { useState } from "react";
import { QueryContext } from "./";
import { replaceQuery } from "../../../";
const getQuery = () => {
  let params = window.location.search;

  if (params.length === 0) {
    return {};
  } else {
    let paramsArr = params.substring(1).split("&");
    let strArr = {};

    console.log(paramsArr);
    paramsArr.map((par, idx) => {
      let keyVal = par.split("=");
      let decodedVal = decodeURI(keyVal[1]);
      let firstChar = decodedVal.substring(0, 1);
      if (firstChar === "[" || firstChar === "{") {
        decodedVal = JSON.parse(decodedVal);
      }
      strArr[keyVal[0]] = decodedVal;
    });
    console.log(strArr);
    return strArr;
  }
};

const checkForUndefined = (req) => {
  let newReq = {};
  for (let key in req) {
    console.log({ key, req });
    if (typeof req[key] !== "undefined") {
      newReq = { ...newReq, [key]: req[key] };
    }
  }
  return newReq;
};

const QueryProvider = ({ children }) => {
  const [query, setQuery] = useState(getQuery());

  const replaceQueryParams = (req = {}) => {
    let modifiedUrl = replaceQuery({ ...req });
    window.history.replaceState({}, null, modifiedUrl);

    const finalReqObj = checkForUndefined(req);
    console.log({ finalReqObj });
    setQuery({ ...query, ...finalReqObj });
  };

  return (
    <QueryContext.Provider
      value={{
        query,
        replaceQueryParams,
      }}
    >
      {children}
    </QueryContext.Provider>
  );
};

export default QueryProvider;
