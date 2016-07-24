import React from 'react';
import { Link } from 'react-router';

const StudentCard = ({ link, photoUrl, story, amount }) => {
  if (story.length > 100) {
    story = story.substring(0, 170) + '...';
  }

  return (
    <Link to={link} className="student-card">
      <img className="student-card-photo" src={photoUrl} />
      <div className="student-card-story">
        {story} <span className="read-more-link">Read More&nbsp;»</span>
      </div>
      <div className="student-card-amount">
        need ${amount}
      </div>
    </Link>
  )
};

StudentCard.propTypes = {
  link: React.PropTypes.string,
  photoUrl: React.PropTypes.string,
  story: React.PropTypes.string,
  amount: React.PropTypes.number
};

export default StudentCard;
