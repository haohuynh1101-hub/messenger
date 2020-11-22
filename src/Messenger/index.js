import React from "react";
import Chat from "./../Chat";
import SideBar from "./../SideBar";
import "./Messenger.css";
function Messenger(props) {
  return (
    <div className="messenger">
      <SideBar />
      <Chat />
    </div>
  );
}

export default Messenger;
