import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { loadStudentsList } from '../actionCreators/students';

import StudentsCardsList from '../components/students/StudentsCardsList';

class SupportStudent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.loadStudentsList();
  }

  render() {
    const { students } = this.props;

    return (
      <div className="container">
        <h2>Choose a student to support</h2>
        <br />
        <StudentsCardsList
          students={students}
          linkPrefix="/profile"
        />
      </div>
    );
  }
}

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
