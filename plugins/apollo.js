export default async (context) => {
  console.log('$auth.................',context.$auth)
  return {
    httpEndpoint: 'http://localhost:3001/roopila',
    httpLinkOptions: {
      headers: {'authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwMWUyMWI1YWNkNzc2MTk3MGJjYjY1MCIsInJvbGUiOjEsImlhdCI6MTYxMzM3NDY5OSwiZXhwIjoxNjEzNDYxMDk5fQ.JdF-16cxhWBXeS6cPuHZUp7UU2y14_V1BBsQEFS9Pys'},
      /*
       * For permanent authentication provide `getAuth` function.
       * The string returned will be used in all requests as authorization header
       */
      getAuth: () => '',
    }
  }
}
