import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ProfileInfo from '../components/profile/ProfileInfo';
import DonationForm from '../components/profile/DonationForm';

import { loadProfile } from '../actionCreators/profile';

class Donation extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.loadProfile(this.props.studentId);
  }


  render() {
    const { amount, profile } = this.props;

    return (
      <div className="container">
        {
          !profile.loaded && 'Loading..'
        }
        {
          profile.loaded &&
          <div>
            <div className="col-md-6">
              <ProfileInfo
                heading={
                  `You\'re donating $${amount} to ` +
                  profile.personalDetails.name.title + ' ' +
                  profile.personalDetails.name.firstName + ' ' +
                  profile.personalDetails.name.lastName
                }
                photoUrl={profile.photo}
              />
            </div>
            <div className="col-md-6" style={{ marginTop: '50px' }}>
              <DonationForm />
            </div>
          </div>
        }
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    amount: ownProps.location.query.amount,
    studentId: ownProps.params.id,
    profile: state.profile
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loadProfile
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Donation);