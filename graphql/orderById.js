import gql from 'graphql-tag'
export const orderById = gql`
  query orderById($id:String!){
    orderById(id:$id){
        user{
          id
          fname
          lname
          mobile
          email
          createdAt
          profile{
          melicode
          gender
          businessField
          address
          }
        }
        payment{
          payments{
            id
            user_id
            user_ip
            pursuitNumber
            amountPay
            paymentStatus
            cardNumber
            cardShaba
            bankPortId
            createdAt
          }
        }
        id
        itemName
        itemCount
        itemWeight
        itemVolume
        description
        itemSample
        status
        inquiryAmount
        finalAmount
        createdAt
        updatedAt
    }

  }
`
