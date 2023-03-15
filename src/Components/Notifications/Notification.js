import React from "react";
import NotificationStyle from "./NotificationStyle";

const Notification = (props) => {
  const { status, title, message } = props;
  return (
    <NotificationStyle status={status}>
      <div id="title">{title}</div>
      <div id="message">{message} </div>
    </NotificationStyle>
  );
};

export default Notification;
