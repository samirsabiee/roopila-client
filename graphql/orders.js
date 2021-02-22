import gql from 'graphql-tag'

export const orders = gql`
    query orders($page: Int , $limit: Int) {
          orders(page:$page limit:$limit) {
            orders{
              id
              user{
                fname
                lname
              }
              itemName
              itemCount
              inquiryAmount
              finalAmount
              status
            }
            paginate{
              page
              pages
              limit
              total
            }
          }
    }
`
