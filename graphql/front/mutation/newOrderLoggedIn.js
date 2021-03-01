import gql from 'graphql-tag'

export const newOrderLoggedIn = gql`
        mutation newOrderLoggedIn($user_id:String!,$itemName:String!,$itemCount:Int!,$itemWeight:String!,$itemVolume:String!,$description:String!,$samples: Upload!){
                newOrderLoggedIn(user_id:$user_id, itemName:$itemName, itemCount:$itemCount, itemWeight:$itemWeight, itemVolume:$itemVolume, description:$description, samples:$samples ){
                    id
                    description
                }
        }
`
