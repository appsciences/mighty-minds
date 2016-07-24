import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { routerActions } from 'react-router-redux';

import { loadProfile } from '../actionCreators/profile';

import ProfileInfo from '../components/profile/ProfileInfo';
import DonateButton from '../components/profile/DonateButton';

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.loadProfile(this.props.studentId);
  }


  render() {
    const { profile, push } = this.props;

    return (
      <div className="container">
        {
          !profile.loaded && 'Loading..'
        }
        {
          profile.loaded &&
          <div>
            <div className="col-md-8">
              <ProfileInfo
                heading={
                  profile.personalDetails.name.title + ' ' +
                  profile.personalDetails.name.firstName + ' ' +
                  profile.personalDetails.name.lastName
                }
                photoUrl={profile.photo}
                story={profile.story}
              />
            </div>
            <div className="col-md-4" style={{ marginTop: '50px' }}>
              <DonateButton
                onSubmit={amount => push(`/donate/${profile._id}?amount=${amount}`)}
              />
            </div>
          </div>
        }
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    studentId: ownProps.params.id,
    profile: state.profile
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loadProfile,
    push: routerActions.push
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);