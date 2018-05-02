import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import {
  DatePicker,
  TextField
} from 'redux-form-material-ui';

const required = value => (value == null ? 'Required' : undefined);

class UserForm extends Component {
  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;

    return (
      <form onSubmit={handleSubmit}>
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
            format={null}
            hintText="Date of Birth"
            validate={required}
          />
        </div>
        <div>
          <button type="submit" disabled={submitting}>Submit</button>
          <button
            type="button"
            disabled={pristine || submitting}
            onClick={reset}
          >
            Clear
          </button>
        </div>
      </form>
    );
  }
}

UserForm = reduxForm({
  form: 'userForm'
})(UserForm);

export default UserForm;