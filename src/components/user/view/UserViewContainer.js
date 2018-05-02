import React from 'react';
import { connect } from 'react-redux';
import UserView from './UserView';

const UserViewContainer = ({ user }) => (
  <UserView {...user} />
);

const mapStateToProps = state => ({
  user: {
    ...state.user
  }
});

export default connect(mapStateToProps)(UserViewContainer);