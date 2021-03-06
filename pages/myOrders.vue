<template>
  <b-container fluid class="section border-top mt-74px p-0 pt-3">
    <div class="row justify-content-center">
      <div class="col-11">
        <div class="table-responsive crypto-table bg-white shadow rounded m-0">
          <table class="table mb-0 table-center">
            <thead>
            <tr class="text-center">
              <th scope="col">#</th>
              <th scope="col">نام کالا</th>
              <th scope="col" style="max-width: 150px;">تعداد</th>
              <th scope="col" style="max-width: 150px;">قیمیت پیشنهادی</th>
              <th scope="col" style="max-width: 150px;">قیمیت نهایی</th>
              <th scope="col" style="width: 450px;">توضیحات</th>
              <th scope="col" style="width: 40px;">وضعبت</th>
              <th scope="col" style="max-width: 150px;">عملیات</th>
            </tr>
            </thead>
            <tbody class="text-center">
            <tr v-for="(order,index) in orders" :key="index">
              <td scope="row">{{index+1}}</td>
              <td>
                <p class="font-weight-bold">{{order.itemName}}</p>
              </td>
              <td class="text-success">{{order.itemCount}}</td>
              <td>{{order.inquiryAmount}} تومان</td>
              <td>{{order.finalAmount}} تومان</td>
              <td><p>{{order.description}}</p></td>
              <td><i :title="order.status" :class="getStatusIcon(order.status)"></i></td>
              <td>
                <b-button v-if="showCancelButton(order.status)" @click="showCancelModal(order.id,order.itemName)"
                          title="لغو درخواست"
                          size="sm"
                          variant="danger"><i class="fa fa-2x fa-times"></i></b-button>
              </td>
            </tr>
            </tbody>
          </table><!--end table-->
          <b-modal id="cancelModal">
            <template #modal-header>لغو درخواست</template>
            <template #default>{{cancelModalData.content}}</template>
            <template #modal-footer="{ok , cancel}">

              <b-button size="sm" variant="danger" @click="cancelRequest">
                تایید
              </b-button>
              <b-button size="sm" variant="info" @click="hideCancelModal">
                لغو
              </b-button>

            </template>
          </b-modal>
        </div>
      </div><!--end col-->
    </div><!--end row-->
  </b-container>
</template>

<script>
  import {ordersByUserId} from "../graphql/ordersByUserId";
  import orderStatics from "../services/orderStatics"
  import {editOrder} from "../graphql/mutation/editOrder";

  export default {
    name: "myOrders",
    data() {
      return {
        orders: [],
        cancelModalData: {
          title: 'لغو درخواست',
          content: '',
          cancelId: null
        }
      }
    },
    apollo: {
      ordersByUserId: {
        query: ordersByUserId,
        variables() {
          return {
            user_id: this.$auth.user._id
          }
        },
        result({data}) {
          this.orders = data.ordersByUserId.orders
        }
      }
    },
    methods: {
      getStatusIcon(status) {
        const {Awaiting_review, Pending, Accepted, Inquiring_prices, Done, Canceled} = orderStatics
        switch (status) {
          case Awaiting_review:
            return "fa fa-spinner fa-spin"
            break
          case Pending:
            return "fas fa-eye text-warning"
            break
          case Accepted:
            return "fas fa-check text-success"
            break
          case Inquiring_prices:
            return "fas fa-dollar-sign text-success"
            break
          case Done:
            return "fas fa-check-double text-success"
            break
          case Canceled:
            return "fas fa-times text-danger"
            break

        }
      },
      async cancelRequest() {
        try {
          const {Canceled} = orderStatics
          let result = await this.$apollo.mutate({
            mutation: editOrder,
            variables: {id: this.cancelModalData.cancelId, status: Canceled}

          })
          this.hideCancelModal()
        } catch (e) {
          console.log(e)
        }
      },
      showCancelButton(status) {
        const {Canceled} = orderStatics
        return status !== Canceled;

      },
      showCancelModal(id, itemName) {
        this.$bvModal.show('cancelModal')
        this.cancelModalData.cancelId = id
        this.cancelModalData.content = `آیا از لغو درخواست ${itemName} اطمینان دارید؟`
      },
      hideCancelModal() {
        this.$bvModal.hide('cancelModal')
      }
    },
  }
</script>

<style scoped>
  .mt-74px {
    margin: 74px 0 0 0;
  }

  .table th, .table td {
    vertical-align: middle;
  }
</style>
