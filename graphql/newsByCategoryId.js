import gql from 'graphql-tag'

export const newsByCategoryId = gql`
  query newsByCategoryId($category_id:String!){
    newsByCategoryId(category_id:$category_id){
      news{
        id
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
      paginate{
        page
        pages
        limit
        total
      }
    }
  }
`
