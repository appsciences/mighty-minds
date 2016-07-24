import React from 'react';

const ProfileInfo = ({ heading, photoUrl, story }) => (
  <div>
    <h2>{heading}</h2>
    <br />
    <img src={photoUrl} style={{ width: '100%' }} />
    {
      story &&
      <div>
        <h3>Story</h3>
        <p className="text-muted profile-story">
          {story}
        </p>
      </div>

    }
  </div>
);

ProfileInfo.propTypes = {
  heading: React.PropTypes.string,
  photoUrl: React.PropTypes.string,
  story: React.PropTypes.string
};

export default ProfileInfo;