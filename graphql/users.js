import gql from 'graphql-tag'

export const users = gql`
        query users($page: Int , $limit: Int) {
          users(page:$page limit:$limit) {
            users{
              id
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
