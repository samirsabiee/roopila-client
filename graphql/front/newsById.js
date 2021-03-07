import gql from 'graphql-tag'

export const newsById = gql`
  query newsById($id:String!){
          newsById(id:$id){
            title
            content
            image
            category{
              id
              name
            }
            tags
            views
            createdAt
          }
  }
`
