import React from "react";
import logo from "../images/logo.svg?url";

const App = () => {
  return (
    <>
      <div className="description">
        React Starter Kit - Webpack, Babel, ESLint, StyleLint, Prettier.
        Supports CSS Modules, SASS, SVGR.
      </div>
      <img src={logo} alt="logo" />
    </>
  );
};

export default App;
