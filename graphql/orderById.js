import gql from 'graphql-tag'
export const orderById = gql`
  query orderById($id:String!){
    orderById(id:$id){
        user_id
        user{
          fname
          lname
        }
        payment{
          payments{
            id
          }
        }
        itemName
        itemCount
        itemWeight
        itemVolume
        itemSample
        status
        inquiryAmount
        finalAmount
        createdAt
        updatedAt
    }

  }
`
