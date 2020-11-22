import React, { useState, useEffect } from "react";
import "./SideBarChat.css";
import Avatar from "@material-ui/core/Avatar";
import { useDispatch } from "react-redux";
import { setChat } from "./../features/chatSlice";
import db from "../firebase";
import * as timeago from "timeago.js";
function SideBarChat(props) {
  const { id, chatName } = props;
  const dispatch = useDispatch();
  const [chatInfor, setChatInfor] = useState([]);
  useEffect(() => {
    db.collection("chats")
      .doc(id)
      .collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setChatInfor(snapshot.docs.map((doc) => doc.data()))
      );
  }, [id]);
  console.log(chatInfor[0]?.message);
  return (
    <div
      onClick={() => {
        dispatch(
          setChat({
            chatName: chatName,
            chatId: id,
          })
        );
      }}
      className="sideBarChat"
    >
      <Avatar />
      <div className="sidebarChat__message">
        <h3>{chatName}</h3>
        <div className="sidebarChat__detail">
          <p>{chatInfor[0]?.message}</p>
          <small>
            {timeago.format(new Date(chatInfor[0]?.timestamp?.toDate()))}
          </small>
        </div>
      </div>
    </div>
  );
}

export default SideBarChat;
