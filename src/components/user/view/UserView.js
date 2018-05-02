import React from 'react';
import PropTypes from 'prop-types';

const UserView = ({ firstName, lastName, dateOfBirth }) => (
  <div>
    <h3>User Information</h3>
    <div>
      {firstName}
    </div>
    <div>
      {lastName}
    </div>
    <div>
      {dateOfBirth}
    </div>
    <div>
      **************
    </div>
  </div>
);

UserView.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  dateOfBirth: PropTypes.string.isRequired
};

export default UserView;