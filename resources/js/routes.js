
let login = require('./components/auth/login.vue').default;
let register = require('./components/auth/register.vue').default;
let forget = require('./components/auth/forget.vue').default;
let Home = require('./components/Home.vue').default;
let logout = require('./components/auth/logout.vue').default;

// employee
let Employee = require('./components/employee/index.vue').default;
let EmployeeStore = require('./components/employee/create.vue').default;
let EmployeeEdit = require('./components/employee/edit.vue').default;

//supplier
let Supplier = require('./components/supplier/index.vue').default;
let SupplierStore = require('./components/supplier/create.vue').default;
let SupplierEdit = require('./components/supplier/edit.vue').default;


export const routes = [
  { path: '/', component: login, name:'/'},
  { path: '/register', component: register, name:'register'},
  { path: '/forget', component: forget, name:'forget'},
  { path: '/home', component: Home, name:'home'},
  { path: '/logout', component: logout, name:'logout'},
  
  // employee
  { path: '/employee', component: Employee, name:'employee'},
  { path: '/store-employee', component: EmployeeStore, name:'store-employee'},
  { path: '/edit-employee/:id', component: EmployeeEdit, name:'edit-employee'},

  // Supplier Routes
  { path: '/store-supplier', component: SupplierStore, name:'store-supplier'},
  { path: '/supplier', component: Supplier, name:'supplier'},
  { path: '/edit-supplier/:id', component: SupplierEdit, name:'edit-supplier'},



]