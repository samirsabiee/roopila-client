import gql from 'graphql-tag'
export const editProfile = gql`
        mutation editProfile($user_id:String!,
        $address:[String],
        $melicode:String,
        $gender:String,
        $avatar:Upload,
        $birthDate:String,
        $businessField:String,
        $bio:String,
        $website:String,
        $socialMedia:[SocialMediaInput],
        $accountType:String,
        $companyName:String,
        $companyId:String,
        $companyBranchAddress:[String],
        $companyManagerName:String,
        $companyField:String,
        $companyPhone:String,
        $companyFax:String) {
          editProfile(
          user_id:$user_id,
          address:$address,
          melicode:$melicode,
          gender:$gender,
          avatar:$avatar,
          birthDate:$birthDate,
          businessField:$businessField,
          bio:$bio,
          website:$website,
          socialMedia:$socialMedia,
          accountType:$accountType,
          companyName:$companyName,
          companyId:$companyId,
          companyBranchAddress:$companyBranchAddress,
          companyManagerName:$companyManagerName,
          companyField:$companyField,
          companyPhone:$companyPhone,
          companyFax:$companyFax
          ){
            id
          }
        }
`
