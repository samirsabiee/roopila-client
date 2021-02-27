import gql from 'graphql-tag'

export const news = gql`
  query news($page:Int $limit:Int){
          news(page:$page limit:$limit){
            news{
               id
               title
               image
               category{
                  id
                  name
               }
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
