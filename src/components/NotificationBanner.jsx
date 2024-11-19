import React from 'react';

const NotificationBanner = ({ notifications }) => (
  <div style={{ padding: '10px', backgroundColor: '#ffcccb', borderRadius: '5px', marginBottom: '20px' }}>
    {notifications.length > 0 ? (
      <ul>
        {notifications.map((note, index) => (
          <li key={index}>{note}</li>
        ))}
      </ul>
    ) : (
      <p>No urgent notifications</p>
    )}
  </div>
);

export default NotificationBanner;
