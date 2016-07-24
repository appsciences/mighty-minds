import React from 'react';

const About = () => (
  <section>
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading">About our service.</h2>
          <hr className="primary" />
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-6 text-center">
          <div className="service-box">
            <i className="fa fa-4x fa-diamond text-primary sr-icons" />
            <h3>Direct to students</h3>
            <p className="text-muted">100% of your donation directly funds life-changing education for a new
              student. You know exactly where your money goes.</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 text-center">
          <div className="service-box">
            <i className="fa fa-4x fa-paper-plane text-primary sr-icons" />
            <h3>Monthly email updates</h3>
            <p className="text-muted">Every month, you receive an email introducing you to the patient you
              supported and an update after they receive care. You'll always see your impact.
            </p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 text-center">
          <div className="service-box">
            <i className="fa fa-4x fa-newspaper-o text-primary sr-icons" />
            <h3>Etc, etc</h3>
            <p className="text-muted">Etc etc etc</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 text-center">
          <div className="service-box">
            <i className="fa fa-4x fa-heart text-primary sr-icons" />
            <h3>Etc, etc</h3>
            <p className="text-muted">Etc etc etc</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;