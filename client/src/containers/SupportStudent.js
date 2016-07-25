import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { loadStudentsList } from '../actionCreators/students';

import StudentsCardsList from '../components/students/StudentsCardsList';

const SupportStudent = ({ students }) => (
  <div className="container">
    <h2>Choose a student to support</h2>
    <br />
    <StudentsCardsList
      students={students}
    />
  </div>
);

const mapStateToProps = (state, ownProps) => {
  return {
    students: state.studentsList
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loadStudentsList
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SupportStudent);
