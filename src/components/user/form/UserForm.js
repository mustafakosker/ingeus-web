import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import {
  DatePicker,
  TextField
} from 'redux-form-material-ui';
import Button from 'material-ui/RaisedButton';
import moment from 'moment';

const required = value => (!value ? 'Required' : undefined);
const validDate = value => {
  const timeStamp = Date.parse(value);
  return isNaN(timeStamp) ? 'Should be valid date' : undefined;
};
const maxLength = max => value =>
  ((value && value.length) > max ? `Must be ${max} characters or less` : undefined);
const password = value =>
  ((value.length < 6 || value.length > 50) ?
    'Must be between 6 and 50 characters' : undefined);

class UserForm extends Component {
  render() {
    const { handleSubmit, submitting } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <h3>User Form</h3>
        <div>
          <Field
            name="firstName"
            component={TextField}
            floatingLabelText="First Name"
            validate={[required, maxLength(200)]}
            ref="firstName"
            withRef
          />
        </div>
        <div>
          <Field
            name="lastName"
            component={TextField}
            floatingLabelText="Last Name"
            validate={[required, maxLength(200)]}
          />
        </div>
        <div>
          <Field
            name="dateOfBirth"
            component={DatePicker}
            formatDate={date => moment(date).format('MMM Do, YYYY')}
            hintText="Date of Birth"
            validate={[required, validDate]}
            openToYearSelection={true}
            maxDate={new Date()}
          />
        </div>
        <div>
          <Field
            name="password"
            component={TextField}
            floatingLabelText="Password"
            type="password"
            validate={[required, password]}
          />
        </div>
        <div>
          <Button
            variant="raised"
            color="primary"
            type="submit"
            disabled={submitting}
          >
            Submit
          </Button>
        </div>
      </form>
    );
  }
}

UserForm = reduxForm({
  form: 'userForm'
})(UserForm);

UserForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default UserForm;