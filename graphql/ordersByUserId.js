import gql from 'graphql-tag'
export const ordersByUserId = gql`
        query ordersByUserId($user_id:String!,$page:Int,$limit:Int){
              ordersByUserId(user_id:$user_id, page:$page, limit:$limit){
                  orders{
                    id
                    itemName
                    itemCount
                    description
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
