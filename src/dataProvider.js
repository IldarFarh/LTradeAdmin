import ApolloClient from 'apollo-boost'
import buildGraphQLProvider, { buildQuery } from 'ra-data-graphql-simple'
// import gql from 'graphql-tag'

const client = new ApolloClient({
  uri: 'https://192.168.86.114:4000/graphql',
  request: (operation) => {
    const token = localStorage.getItem('token')
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    })
  }
})

const myBuildQuery = introspection => (fetchType, resource, params) => {
  const builtQuery = buildQuery(introspection)(fetchType, resource, params)
  // if (resource === 'Lead' && fetchType === 'GET_LIST') {
  //   console.log(builtQuery.query)
  //   return {
  //     ...builtQuery,
  //     query: gql`
  //       query allLeads($page: Int $perPage: Int $filter: LeadFilter) {
  //         data: allLeads(page: $page perPage: $perPage filter: $filter) {
  //           created_by
  //           createdAt
  //           group {
  //             name
  //           }
  //           status
  //           responsible_user {
  //             name
  //           }
  //         }
  //       }`
  //   }
  // }
  return builtQuery
}

export default buildGraphQLProvider({ client, buildQuery: myBuildQuery })