import React from 'react'
import {
  Edit,
  SimpleForm,
  TextInput
} from 'react-admin'

const UserTitle = ({record}) => <span>Edit user: {record.email}</span>

const UserEdit = props => (
  <Edit
    title={<UserTitle />}
    {...props}
  >
    <SimpleForm>
      <TextInput source="email" />
      <TextInput source="name" />
      <TextInput source="role" />
      <TextInput source="phone" />
    </SimpleForm>
  </Edit>
)

export default UserEdit