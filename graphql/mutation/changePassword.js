import gql from 'graphql-tag'

export const changePassword = gql`
  mutation changePassword($id:String!,$oldPassword:String!,$password:String!,$retypePassword:String!){
    changePassword(id:$id,oldPassword:$oldPassword,password:$password,retypePassword:$retypePassword)
  }
`
