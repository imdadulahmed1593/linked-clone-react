import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import HeaderOption from "../HeaderOption/HeaderOption";
import { BusinessCenter, Chat, Notifications } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../features/userSlice";
import { auth } from "../../firebase";

function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const logoutFromApp = () => {
    console.log("clicked");
    dispatch(logout());
    auth.signOut();
  };
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://image.flaticon.com/icons/png/512/174/174857.png"
          alt=""
        />

        <div className="header__search">
          <SearchIcon />
          <input placeholder="Search" type="text" name="" id="" />
        </div>
      </div>

      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenter} title="Jobs" />
        <HeaderOption Icon={Chat} title="Messaging" />
        <HeaderOption Icon={Notifications} title="Notifications" />
        <HeaderOption avatar title={user.displayName} onClick={logoutFromApp} />
      </div>
    </div>
  );
}

export default Header;
