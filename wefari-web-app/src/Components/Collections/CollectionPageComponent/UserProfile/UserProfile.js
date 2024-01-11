import React from 'react';
import './UserProfile.css'; // Import your CSS file

const UserProfile = ({ username, profilePictureUrl }) => {
  return (
    <div className="user-profile">
      <img className="profile-picture" src={'profile.jpg'} alt="Profile" />
      <div className="user-details">
        <div className="username">{username} Luka E. Wefari</div>
        {/* Add more user details here if needed */}
      </div>
    </div>
  );
};

export default UserProfile;