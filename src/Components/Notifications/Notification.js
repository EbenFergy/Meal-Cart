import React from "react";
import NotificationStyle from "./NotificationStyle";

const Notification = (props) => {
  return (
    <NotificationStyle>
      <div id="head">{props.head}Success!</div>
      <div id="body">{props.body} Added to cart!!!</div>
    </NotificationStyle>
  );
};

export default Notification;
