import React from 'react';
import { connect } from 'react-redux';

import Header from '../components/landing/Header';
import Description from '../components/landing/Description';
import About from '../components/landing/About';
import Students from '../components/landing/Students';
import DonateNow from '../components/landing/DonateNow';

const Landing = ({students}) => (
  <div>
    <Header />

    <Description />

    <About />

    <Students students={students} />

    <DonateNow />

  </div>
);

const mapStateToProps = (state) => {
  return {
    students: state.studentsList.slice(0, 3)
  };
};

export default connect(mapStateToProps)(Landing);