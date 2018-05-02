import React from 'react';
import PropTypes from 'prop-types';

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

const UserView = ({ firstName, lastName, dateOfBirth }) => (
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
  </div>
);

UserView.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  dateOfBirth: PropTypes.string.isRequired
};

export default UserView;