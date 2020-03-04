import React, { Component } from 'react'
import { Admin, Resource } from 'react-admin'

import buildGraphQLProvider from './dataProvider'
import authProvider from './authProvider'
import { ProjectList, UserList, LeadList, PartnerList, ContactList, CompanyList } from './Lists'


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
      return <div>Loading</div>
    }

    return (
      <Admin authProvider={authProvider} dataProvider={dataProvider}>
        <Resource name="Project" list={ProjectList} />
        <Resource name="User" list={UserList} />
        <Resource name="Lead" list={LeadList} />
        <Resource name="Partner" list={PartnerList} />
        <Resource name="Contact" list={ContactList} />
        <Resource name="Company" list={CompanyList} />
      </Admin>
    );
  }
}

export default App
