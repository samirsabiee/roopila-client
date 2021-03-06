import gql from 'graphql-tag'

export const editUser = gql`
  mutation editUser($id:String!,$fname:String,$lname:String,$mobile:String){
    editUser(id:$id,fname:$fname,lname:$lname,mobile:$mobile){
      id
    }
  }
`
