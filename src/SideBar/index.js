import React, { useState, useEffect } from "react";
import "./SideBar.css";
import SideBarChat from "../SideBarChat";

import Avatar from "@material-ui/core/Avatar";
import SettingIcon from "@material-ui/icons/Settings";
import VideoIcon from "@material-ui/icons/VideoCall";
import RateReviewIcon from "@material-ui/icons/RateReview";
import SearchIcon from "@material-ui/icons/Search";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../features/userSlice";
import db, { auth } from "../firebase";
function SideBar(props) {
  const user = useSelector(selectUser);
  const [chats, setChats] = useState([]);
  useEffect(() => {
    db.collection("chats").onSnapshot((snapshot) =>
      setChats(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []);

  function addChat() {
    const chatName = prompt("Please enter a chat name");
    db.collection("chats").add({
      chatName: chatName,
    });
  }
  return (
    <div className="sideBar">
      <div className="sideBar__head">
        <Avatar
          onClick={() => auth.signOut()}
          className="sideBar__head__image"
          src={user.photo}
        />
        <div>
          <SettingIcon className="sideBar__head_icons" />
          <VideoIcon className="sideBar__head_icons" />
          <RateReviewIcon onClick={addChat} className="sideBar__head_icons" />
        </div>
      </div>
      <div className="sideBar__input">
        <SearchIcon className="sideBar__searchIcon" />
        <input type="text" placeholder="Search on Messenger" />
      </div>

      <div className="sideBar__chats">
        {chats.map(({ id, data: { chatName } }) => (
          <SideBarChat key={id} id={id} chatName={chatName} />
        ))}
      </div>
    </div>
  );
}

export default SideBar;
