import gql from 'graphql-tag'
export const dashboard = gql`
query dashboard {
  dashboard{
    totalUsers
    totalOrders
    totalPayments
    totalNews
    lastOrders{
      itemName
    }
    lastPayments{
      pursuitNumber
    }
  }
}

`
