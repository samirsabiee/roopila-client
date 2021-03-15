import gql from 'graphql-tag'
export const profileByUserIdAvatar = gql`
    query profileByUserId($user_id:String!){
        profileByUserId(user_id:$user_id){
          avatar
        }
    }
`
