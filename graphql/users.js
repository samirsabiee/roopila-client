import gql from 'graphql-tag'

export const users = gql`
        query users {
          users {
            users{
              fname
              lname
              profile{
                melicode
              }
              orders{
                id
              }
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
