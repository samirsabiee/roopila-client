import gql from 'graphql-tag'
export const galleryCategories = gql`
     query galleryCategories($page:Int $limit:Int){
          galleryCategories(page:$page limit:$limit){
              galleryCategories{
                  id
                  name
              }
          }
      }
`
