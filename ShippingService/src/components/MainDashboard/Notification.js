import React from "react";
import moment from "moment";

function Notification({ notification }) {
  console.log(notification);
  return (
    <>
      <br />
      {notification &&
        notification.map((notifi) => {
          return (
            <div className="alert alert-secondary">
              <strong>{notifi.content}</strong>: {notifi.state}, <br />{" "}
              {moment(notifi.time.toDate()).fromNow()}
            </div>
          );
        })}
    </>
  );
}

export default Notification;
