import gql from 'graphql-tag'

export const news = gql`
  query news($page:Int $limit:Int){
          news(page:$page limit:$limit){
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
