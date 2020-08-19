import React from 'react'
import {
  List,
  Datagrid,
  EmailField,
  TextField,
  Filter,
  SearchInput
} from 'react-admin'
import { useMediaQuery } from '@material-ui/core'

import MobileGrid from './MobileGrid'

const UserFilter = props => (
  <Filter {...props}>
    <SearchInput source="q" alwaysOn />
  </Filter>
)

const UserList = props => {
  const isXsmall = useMediaQuery(theme => theme.breakpoints.down('xs'))
  return (
    <List {...props} filters={<UserFilter />}>
      {isXsmall ? (
        <MobileGrid />
      ) : (
        <Datagrid optimized rowClick="edit">
          <EmailField source="email" />
          <TextField source="role" />
          <TextField label="Имя" source="name" />
          <TextField source="phone" />
          <TextField label="Подразделение" source="group.name" />
        </Datagrid>
      )}
    </List>
  )
}

export default UserList