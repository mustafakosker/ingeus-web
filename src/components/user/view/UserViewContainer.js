import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserView from './UserView';

class UserViewContainer extends Component {

  navigateToForm = () =>
    this.props.history.push('/');

  componentDidMount() {
    const { user } = this.props;

    if (!user ||
        (!user.firstName && !user.lastName && !user.dateOfBirth)) {
      this.navigateToForm();
    }
  }

  render() {
    return (
      <UserView
        navigateToForm={this.navigateToForm}
        {...this.props.user}
      />
    );
  }
}

const mapStateToProps = state => ({
  user: {
    ...state.user
  }
});

export default connect(mapStateToProps)(UserViewContainer);