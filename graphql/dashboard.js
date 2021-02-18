import gql from 'graphql-tag'
export const dashboard = gql`
query dashboard {
  dashboard{
    totalUsers
    totalOrders
    totalPayments
    totalNews
    lastOrders{
      user{
        fname
      }
      status
      itemName
    }
    lastPayments{
      pursuitNumber
      paymentStatus
      amountPay
      user{
        fname
      }
    }
  }
}

`
