import React, { forwardRef } from "react";
import "./Message.css";
import Avatar from "@material-ui/core/Avatar";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import * as timeago from "timeago.js";
// function Message(props) {
//   const {
//     id,
//     contents: { message, timestamp, email, photo },
//   } = props;
//   const user = useSelector(selectUser);
//   return (
//     <div className={user.email === email ? "message__sender" : "message"}>
//       <Avatar className="message__photo" src={photo} />
//       <div className="message__detail">
//         <p>{message}</p>
//         <small>{new Date(timestamp?.toDate()).toLocaleDateString()}</small>
//       </div>
//     </div>
//   );
// }

const Message = forwardRef((props, ref) => {
  const {
    id,
    contents: { message, timestamp, email, photo },
  } = props;
  const user = useSelector(selectUser);
  return (
    <div
      ref={ref}
      className={user.email === email ? "message__sender" : "message"}
    >
      <Avatar className="message__photo" src={photo} />
      <p>{message}</p>
      <small>{timeago.format(new Date(timestamp?.toDate()))}</small>
    </div>
  );
});

export default Message;
