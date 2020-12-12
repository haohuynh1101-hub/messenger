import React, { useState, useEffect } from "react";
import "./Chat.css";
import { useSelector } from "react-redux";
import ChatHead from "../ChatHead";
import Message from "../Message";
import PhoneIcon from "@material-ui/icons/Phone";
import VideocamIcon from "@material-ui/icons/Videocam";
import ErrorIcon from "@material-ui/icons/Error";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import PhotoIcon from "@material-ui/icons/Photo";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import GifIcon from "@material-ui/icons/Gif";
import SendIcon from "@material-ui/icons/Send";
import { selectChatId, selectChatName } from "../features/chatSlice";
import { selectUser } from "../features/userSlice";
import FlipMove from "react-flip-move";
import db from "./../firebase";
import firebase from "firebase";
function Chat(props) {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const user = useSelector(selectUser);
  const chatName = useSelector(selectChatName);
  const chatId = useSelector(selectChatId);
  useEffect(() => {
    if (chatId) {
      db.collection("chats")
        .doc(chatId)
        .collection("messages")
        .orderBy("timestamp", "asc")
        .onSnapshot((snapshot) =>
          setMessages(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    }
  }, [chatId]);
  function sendMessage(e) {
    e.preventDefault();

    db.collection("chats").doc(chatId).collection("messages").add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      message: input,
      userId: user.userId,
      photo: user.photo,
      email: user.email,
      displayName: user.displayName,
    });

    setInput("");
  }
  return (
    <div className="chat">
      <div className="chat__head">
        <ChatHead chatId={chatId} chatName={chatName} />
        <div>
          <PhoneIcon className="chat__head__icons" />
          <VideocamIcon className="chat__head__icons" />
          <ErrorIcon className="chat__head__icons" />
        </div>
      </div>

      <div className="chat__messages">
        <div className="scroll">
          <FlipMove>
            {messages.map(({ id, data }) => (
              <Message key={id} contents={data} />
            ))}
          </FlipMove>
        </div>
      </div>

      <div className="chat__input">
        <div>
          <AddCircleIcon className="chat__head__icons" />
          <GifIcon className="chat__head__icons" />
          <InsertDriveFileIcon className="chat__head__icons" />
          <PhotoIcon className="chat__head__icons" />
        </div>
        <form>
          <div className="chat__input__send">
            <input
              type="text"
              placeholder="type your message"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <SendIcon className="chat__input__sendButton" />
            <button onClick={sendMessage}></button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Chat;
