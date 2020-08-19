import React, { Component } from 'react'
import { Admin, Resource } from 'react-admin'

import buildGraphQLProvider from './dataProvider'
import authProvider from './authProvider'
import { ProjectList, LeadList, PartnerList, ContactList, CompanyList } from './Lists'
import users from './users'

import './App.css'

class App extends Component {
  constructor() {
    super();
    this.state = { dataProvider: null }
  }

  componentDidMount() {
    buildGraphQLProvider
      .then(dataProvider => this.setState({ dataProvider }))
  }

  render() {
    const { dataProvider } = this.state;

    if (!dataProvider) {
      return (
        <div className="loader-container">
          <div className="loader">Загружаем...</div>
        </div>
      )
    }

    return (
      <Admin title="Админ ЛКЛТ" authProvider={authProvider} dataProvider={dataProvider}>
        <Resource name="Project" list={ProjectList} />
        <Resource name="User" {...users} />
        <Resource name="Lead" list={LeadList} />
        <Resource name="Partner" list={PartnerList} />
        <Resource name="Contact" list={ContactList} />
        <Resource name="Company" list={CompanyList} />
      </Admin>
    );
  }
}

export default App
