import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/RaisedButton';

const successMessageInfoStyle = {
  color: 'green',
  marginTop: '10px'
};

const userInfoRowStyle = {
  marginTop: '10px',
  display: 'flex',
  justifyContent: 'space-between'
};

const labelStyle = {
  color: 'red'
};

const buttonStyle = {
  marginTop: '10px'
};

const UserView = ({ firstName, lastName, dateOfBirth, navigateToForm }) => (
  <div>
    <h3>User Information</h3>
    <div style={userInfoRowStyle}>
      <div style={labelStyle}>
        First Name:
      </div>
      <div>
        {firstName}
      </div>
    </div>
    <div style={userInfoRowStyle}>
      <div style={labelStyle}>
        Last Name:
      </div>
      <div>
        {lastName}
      </div>
    </div>
    <div style={userInfoRowStyle}>
      <div style={labelStyle}>
        Date of Birth:
      </div>
      <div>
        {dateOfBirth}
      </div>
    </div>
    <div style={userInfoRowStyle}>
      <div style={labelStyle}>
        Password(Masked):
      </div>
      <div>
        ******
      </div>
    </div>
    <div style={successMessageInfoStyle}>
      User details saved successfully.
    </div>
    <Button
      variant="raised"
      color="primary"
      style={buttonStyle}
      onClick={navigateToForm}
    >
      Add User
    </Button>
  </div>
);

UserView.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  dateOfBirth: PropTypes.string.isRequired,
  navigateToForm: PropTypes.func.isRequired
};

export default UserView;