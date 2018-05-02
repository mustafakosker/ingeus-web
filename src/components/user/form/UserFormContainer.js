import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import UserForm from './UserForm';
import { saveUser as saveUserAction } from '../../../actions/user/userActions';

class UserFormContainer extends Component {

  render() {
    return (
      <UserForm
        onSubmit={data => this.props.saveUser(data).then(() =>
          this.props.history.push('/view'))
        }
      />
    )
  }
}

const mapDispatchToProps = dispatch => ({
  saveUser: user => dispatch(saveUserAction(user))
});

UserFormContainer.propTypes = {
  saveUser: PropTypes.func.isRequired
};

export default connect(null, mapDispatchToProps)(UserFormContainer);