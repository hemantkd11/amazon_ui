export const getLocation = () => {
  let location = localStorage.getItem("user-loaction");
  if (location) {
    return JSON.parse(location);
  }

  return {};
};

const checkValueType = (value) => {
  console.log(typeof value);
  if (typeof value === "object") {
    return encodeURI(JSON.stringify(value));
  } else {
    return encodeURI(value.toString());
  }
};

const createParams = (obj) => {
  let strArr = [];

  for (let key in obj) {
    strArr.push(key + "=" + checkValueType(obj[key]));
  }
  return strArr.join("&");
};

const createObjForParams = (params, obj) => {
  let keyValus = params.split("&");
  let finalArr = [];
  keyValus.map((item) => {
    let val = item.split("=");
    console.log(obj[val[0]], val[0], val[1], obj);
    if (obj.hasOwnProperty(val[0])) {
      if (obj[val[0]]) {
        finalArr.push(`${val[0]}=${checkValueType(obj[val[0]])}`);
      }
      delete obj[val[0]];
    } else {
      finalArr.push(`${val[0]}=${val[1]}`);
    }
  });

  console.log("createObjForParams", obj);
  Object.keys(obj).map((item) => {
    if (obj[item]) finalArr.push(`${item}=${checkValueType(obj[item])}`);
  });
  return finalArr.join("&");
};

export const replaceQuery = (obj) => {
  let url = window.location;
  console.log("Update Object", obj);
  let search = decodeURI(url.search);
  if (search.length === 0) {
    url = url + "?";
    url = url + createParams(obj);
  } else {
    let params = url.search.substring(1);
    let paramsObj = createObjForParams(params, obj);
    url = "?" + paramsObj;
  }

  return url;
};
