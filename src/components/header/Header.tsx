import React from "react";
import NavBar from "../navbar/NavBar";
import "./Header.scss";

const Header: React.FunctionComponent = () => {
  return (
    <>
      <header className="header">
        <NavBar />
      </header>
    </>
  );
};

export default Header;
