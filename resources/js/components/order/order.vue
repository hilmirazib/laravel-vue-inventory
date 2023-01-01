<template>
  <div>
    <br>
    <input type="text" v-model="searchTerm" class="form-control" style="width: 300px;" placeholder="Search Here">
    <br>
    <div class="row">
      <div class="col-lg-12 mb-4">
        <!-- Simple Tables -->
        <div class="card">
          <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
            <h6 class="m-0 font-weight-bold text-primary">Today Orders</h6>
          </div>
          <div class="table-responsive">
            <table class="table align-items-center table-flush">
              <thead class="thead-light">
                <tr>
                  <th>Name</th>
                  <th>Total Amount </th>
                  <th>Pay</th>
                  <th>Due</th>
                  <th>PayBy</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="order in filtersearch" :key="order.id">
                  <td> {{ order.name }} </td>
                  <td> {{ toRupiah(order.total) }} </td>
                  <td> {{ toRupiah(order.pay) }} </td>
                  <td> {{ toRupiah(order.due) }} </td>
                  <td> {{ order.payby }} </td>
                  <td>
                    <router-link :to="{ name: 'view-order', params: { id: order.id } }"
                      class="btn btn-sm btn-primary">View</router-link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="card-footer"></div>
        </div>
      </div>
    </div>
    <!--Row-->
  </div>
</template>

<script type="text/javascript">

export default {
  created() {
    if (!User.loggedIn()) {
      this.$router.push({ name: '/' })
    }
  },
  data() {
    return {
      orders: [],
      searchTerm: ''
    }
  },
  computed: {
    filtersearch() {
      return this.orders.filter(order => {
        return order.name.match(this.searchTerm)
      })
    }
  },

  methods: {
    allOrder() {
      axios.get('/api/orders/')
        .then(({ data }) => (this.orders = data))
        .catch()
    },
    toRupiah(angka) {
        var rupiah = '';
        var angkarev = angka.toString().split('').reverse().join('');
        for(var i = 0; i < angkarev.length; i++) {
          if(i%3 == 0) {
            rupiah += angkarev.substr(i,3)+'.';
          }
        }
        return 'Rp. '+rupiah.split('',rupiah.length-1).reverse().join('');
    }


  },
  created() {
    this.allOrder();
  }


} 
</script>


<style type="text/css">
#em_photo {
  height: 40px;
  width: 40px;
}
</style>