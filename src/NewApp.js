import React from "react";
import "./Styles/styles.css";
import { AppHeader, useQuery } from "./Components";

const NewApp = () => {
  const { query } = useQuery();
  console.log("Query", query);
  return (
    <div className="app-container">
      <AppHeader />
    </div>
  );
};

export default NewApp;
