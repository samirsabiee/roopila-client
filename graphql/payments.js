import gql from 'graphql-tag'

export const payments = gql`
      query payments($page: Int , $limit: Int) {
          payments(page:$page limit:$limit) {
            payments{
              user_ip
              amountPay
              pursuitNumber
              order_id
              paymentStatus
              cardNumber
              cardShaba
              bankPortId
              createdAt
              user{
                fname
                lname
              }
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
