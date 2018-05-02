import React from 'react';
import UserForm from './UserForm';

const UserFormContainer = () => (
  <UserForm onSubmit={data => console.log(data)}/>
);

export default UserFormContainer;