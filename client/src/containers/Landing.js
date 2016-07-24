import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Header from '../components/landing/Header';
import Description from '../components/landing/Description';
import About from '../components/landing/About';
import Students from '../components/landing/Students';
import DonateNow from '../components/landing/DonateNow';

const Landing = () => (
  <div>
    <Header />

    <Description />

    <About />

    <Students />

    <DonateNow />

  </div>
);

export default connect()(Landing);