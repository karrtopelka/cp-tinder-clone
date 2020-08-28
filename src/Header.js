import React from "react";
import "./Header.css";
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";
import GradeIcon from "@material-ui/icons/Grade";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";

function Header({ backButton }) {
  return (
    <div className="header">
      <Link to="/">
        <img
          className={`header__logo ${backButton && "header__logoGrey"}`}
          src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png"
          alt="tinder-logo"
        />
      </Link>
      <IconButton>
        <GradeIcon className="header__icon" fontSize="large" />
      </IconButton>
      <Link to="/chats">
        <IconButton>
          <ForumIcon className="header__icon" fontSize="large" />
        </IconButton>
      </Link>
      <IconButton>
        <PersonIcon className="header__icon" fontSize="large" />
      </IconButton>
    </div>
  );
}

export default Header;
