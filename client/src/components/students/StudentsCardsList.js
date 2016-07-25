import React from 'react';

import StudentCard from './StudentCard';

const StudentsList = ({ students }) => (
  <div className="students-list">
    {
      students.map(s =>
        <StudentCard
          key={s._id}
          link={`/profile/${s._id}`}
          photoUrl={s.photo}
          story={s.story}
          amount={s.neededAmount}
        />)
    }
  </div>
);

export default StudentsList;