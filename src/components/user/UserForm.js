import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import {
  DatePicker,
  TextField
} from 'redux-form-material-ui';
import Button from 'material-ui/RaisedButton';
import moment from 'moment';

const required = value => (value == null ? 'Required' : undefined);

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
            validate={required}
            ref="firstName"
            withRef
          />
        </div>
        <div>
          <Field
            name="lastName"
            component={TextField}
            floatingLabelText="Last Name"
            validate={required}
          />
        </div>
        <div>
          <Field
            name="password"
            component={TextField}
            floatingLabelText="Password"
            type="password"
            validate={required}
          />
        </div>
        <div>
          <Field
            name="dateOfBirth"
            component={DatePicker}
            formatDate={date => moment(date).format('MMM Do, YYYY')}
            hintText="Date of Birth"
            validate={required}
            openToYearSelection={true}
            maxDate={new Date()}
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

export default UserForm;