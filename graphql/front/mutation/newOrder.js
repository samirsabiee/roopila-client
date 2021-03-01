import gql from 'graphql-tag'

export const newOrder = gql`
    mutation newOrder($fName:String!,$lName:String!,$mobile:String!,$email:String!,$itemName:String!,$itemCount:Int!,$itemWeight:String!,$itemVolume:String!,$description:String!, $samples: Upload!){
                      newOrder(fName:$fName, lName:$lName, mobile:$mobile, email:$email, itemName:$itemName, itemCount:$itemCount, itemWeight:$itemWeight, itemVolume:$itemVolume, description:$description, samples:$samples ){
                                  id
                                  description
                      }
    }
`
