import gql from 'graphql-tag'

export const user = gql`
        query user($id:String!) {
          user(id:$id) {
            fname
            lname
            mobile
            email
            profile {
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
            orders{
              id
              itemName
              itemCount
              description
              inquiryAmount
              finalAmount
              status
            }
          }
        }
      `
