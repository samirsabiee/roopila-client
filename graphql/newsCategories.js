import gql from 'graphql-tag'

export const newsCategories = gql`
    query newsCategories($page:Int $limit:Int){
        newsCategories(page:$page limit:$limit){
          categories{
            id
            name
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
