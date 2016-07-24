import React from 'react';

import StudentCard from './StudentCard';

const StudentsList = ({ students, linkPrefix }) => (
  <div className="students-list">
    {
      students.map(s =>
        <StudentCard
          key={s._id}
          link={`${linkPrefix}/${s._id}`}
          photoUrl={s.photo}
          story={s.story}
          amount={s.neededAmount}
        />)
    }
  </div>
);

export default StudentsList;