import React from "react";
import "./ChatHead.css";
import Avatar from "@material-ui/core/Avatar";

function ChatHead(props) {
  const { chatId, chatName } = props;
  return (
    <div className="chathead">
      <Avatar sr />
      <div>
        <h3>{chatName}</h3>
        <p>active 3 miniutes</p>
      </div>
    </div>
  );
}

export default ChatHead;
