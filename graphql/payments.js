import gql from 'graphql-tag'

export const payments = gql`
      query payments($page: Int , $limit: Int) {
          payments(page:$page limit:$limit) {
            payments{
              pursuitNumber
              order_id
              paymentStatus
              user{
                fname
                lname
              }
              amountPay
              createdAt
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
