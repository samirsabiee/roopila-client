import gql from 'graphql-tag'
export const profileByUserId = gql`
    query profileByUserId($user_id:String!){
        profileByUserId(user_id:$user_id){
          id
          address
          melicode
          gender
          avatar
          birthDate
          businessField
          bio
          website
          socialMedia{
            name
            value
          }
          accountType
          companyName
          companyId
          companyBranchAddress
          companyManagerName
          companyField
          companyPhone
          companyFax
          profileStatus
          createdAt
          updatedAt
        }
    }
`
