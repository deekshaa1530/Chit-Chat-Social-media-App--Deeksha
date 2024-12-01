import React, { useContext } from 'react';
import '../styles/Notifications.css';
import { RxCross2 } from 'react-icons/rx';
import { GeneralContext } from '../context/GeneralContextProvider';

const Notifications = () => {
  const { isNotificationsOpen, setNotificationsOpen } = useContext(GeneralContext);

  const sampleNotifications = [
    "ayushi10 followed you",
    "kriti liked your post",
    "rohan commented on your photo",
    "nisha shared your post",
  ];

  return (
    <>
      <div
        className="notificationsModalBg"
        style={isNotificationsOpen ? { display: 'contents' } : { display: 'none' }}
      >
        <div className="notificationsContainer">
          <RxCross2
            className="closenotifications"
            onClick={() => setNotificationsOpen(false)}
          />
          <h2 className="notificationsTitle">Notifications</h2>
          <hr className="notificationsHr" />

          <div className="notificationsBody">
            {sampleNotifications.length > 0 ? (
              sampleNotifications.map((notification, index) => (
                <p key={index} className="notificationItem">
                  {notification}
                </p>
              ))
            ) : (
              <p>No new notifications</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Notifications;
