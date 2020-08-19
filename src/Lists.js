import React from 'react'
import { List, Datagrid, TextField, DateField, ReferenceField } from 'react-admin'

export const ProjectList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <DateField source="date" />
      <ReferenceField source="partner.id" reference="Partner">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="user.id" reference="User">
        <TextField source="name" />
      </ReferenceField>
    </Datagrid>
  </List>
)

export const PartnerList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="inn" />
      <TextField source="email" />
      <TextField source="name" />
      <TextField source="user" />
    </Datagrid>
  </List>
)

export const LeadList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <ReferenceField source="created_by" reference="User">
        <TextField source="name" />
      </ReferenceField>
      <DateField source="createdAt" />
      <TextField source="group.name" />
      <TextField source="status" />
      <ReferenceField source="responsible_user.id" reference="User">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="company.id" reference="Company">
        <TextField source="name" />
      </ReferenceField>
    </Datagrid>
  </List>
)

export const ContactList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <ReferenceField source="created_by" reference="User">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="name" />
      <DateField source="createdAt" />
      <TextField source="group.name" />
      <TextField source="phone" />
      <TextField source="email" />
      <ReferenceField source="responsible_user.id" reference="User">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="company.id" reference="Company">
        <TextField source="name" />
      </ReferenceField>
    </Datagrid>
  </List>
)

export const CompanyList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <ReferenceField source="created_by" reference="User">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="name" />
      <DateField source="createdAt" />
      <TextField source="group.name" />
      <TextField source="phone" />
      <TextField source="email" />
      <TextField source="responsible_user" />
      <ReferenceField source="responsible_user.id" reference="User">
        <TextField source="name" />
      </ReferenceField>
    </Datagrid>
  </List>
)