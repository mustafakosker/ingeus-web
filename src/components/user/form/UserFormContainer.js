import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import UserForm from './UserForm';
import {saveUser as saveUserAction} from '../../../actions/user/userActions';

const errorMessageStyle = {
  color: 'red',
  marginTop: '10px'
};

class UserFormContainer extends Component {

  render() {
    const { errorMessage } = this.props;

    return (
      <div>
        <UserForm
          onSubmit={data => this.props.saveUser(data,
            () => this.props.history.push('/view'))
          }
        />
        {errorMessage &&
          (<div style={errorMessageStyle}>
            {`Error occurred when saving user details: ${errorMessage}`}
          </div>)
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  errorMessage: state.user.errorMessage
});

const mapDispatchToProps = dispatch => ({
  saveUser: (user, onSuccess) => dispatch(saveUserAction(user, onSuccess))
});

UserFormContainer.propTypes = {
  saveUser: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(UserFormContainer);