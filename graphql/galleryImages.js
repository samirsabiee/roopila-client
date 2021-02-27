import gql from 'graphql-tag'
export const galleryImages = gql`
        query galleryImages($page:Int $limit:Int){
            galleryImages(page:$page limit:$limit){
                images{
                   id
                   image
                   category_id
                }
                paginate{
                  page
                  pages
                  total
                  limit
                }
            }
        }
`
