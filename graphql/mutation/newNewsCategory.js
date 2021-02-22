import gql from 'graphql-tag'

export const newNewsCategory = gql`
    mutation newNewsCategory($name:String!){
        newNewsCategory(name:$name){
          id
          name
        }
    }
`
