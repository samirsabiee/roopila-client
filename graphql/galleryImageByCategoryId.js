import gql from 'graphql-tag'
export const galleryImageByCategoryId = gql`
    query galleryImageByCategoryId($category_id:String!,$page:Int,$limit:Int){
        galleryImageByCategoryId(category_id:$category_id page:$page limit:$limit){
            images{
              id
              image
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
