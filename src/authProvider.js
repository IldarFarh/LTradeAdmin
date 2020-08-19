const authProvider = {
  login: ({ username, password }) => {
    const request = new Request('https://cabinet.leasing-trade.ru:4000/graphql', {
      method: 'POST',
      body: JSON.stringify({
        operationName: null,
        query:
          'mutation($email: String!, $password: String!) ' +
          '{loginUser(email: $email, password: $password)}',
        variables: { email: username, password }
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
    return fetch(request)
      .then(response => {
        if (response.status < 200 || response.status >= 300) throw new Error(response.statusText)
        return response.json()
      })
      .then(({ data }) => localStorage.setItem('token', data.loginUser))
  },
  logout: () => {
    localStorage.removeItem('token')
    return Promise.resolve()
  },
  checkAuth: () => localStorage.getItem('token')
    ? Promise.resolve()
    : Promise.reject(),
  checkError: error => {
    const status = error.status
    if (status === 401 || status === 403) {
      localStorage.removeItem('token')
      return Promise.reject()
    }
    return Promise.resolve()
  },
  getPermissions: params => Promise.resolve()
}

export default authProvider