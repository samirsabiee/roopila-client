import gql from 'graphql-tag'

export const users = gql`
        query users {
          users {
            users{
              fname
              lname
              email
            }
            paginate{
            total
            limit
            page
            pages
            }
          }
        }
      `
