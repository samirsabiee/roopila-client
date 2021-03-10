import gql from 'graphql-tag'

export const userSearch = gql`
  query userSearch($needle:String!){
          userSearch(needle:$needle){
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
