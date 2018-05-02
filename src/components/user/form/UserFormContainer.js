import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import UserForm from './UserForm';
import { saveUser as saveUserAction } from '../../../actions/user/userActions';

const UserFormContainer = ({ saveUser }) => (
  <UserForm onSubmit={saveUser}/>
);

const mapDispatchToProps = dispatch => ({
  saveUser: user => dispatch(saveUserAction(user))
});

UserFormContainer.propTypes = {
  saveUser: PropTypes.func.isRequired
};

export default connect(null, mapDispatchToProps)(UserFormContainer);