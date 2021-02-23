import gql from 'graphql-tag'

export const newNews = gql`
    mutation newNews($title:String!,$content:String!,$tags:[String]!,$category_id:String!,$image: Upload!){
        newNews(title:$title,content:$content,tags:$tags,category_id:$category_id,image:$image){
            id
        }
    }
`
