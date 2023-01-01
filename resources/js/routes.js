
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

//category
let Category = require('./components/category/index.vue').default;
let CategoryStore = require('./components/category/create.vue').default;
let CategoryEdit = require('./components/category/edit.vue').default;

//product
let Product = require('./components/product/index.vue').default;
let ProductStore = require('./components/product/create.vue').default;
let ProductEdit = require('./components/product/edit.vue').default;


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

  // Category Routes
  { path: '/store-category', component: CategoryStore, name:'store-category'},
  { path: '/category', component: Category, name:'category'},
  { path: '/edit-category/:id', component: CategoryEdit, name:'edit-category'},

  // Product Routes
  { path: '/store-product', component: ProductStore, name:'store-product'},
  { path: '/product', component: Product, name:'product'},
  { path: '/edit-product/:id', component: ProductEdit, name:'edit-product'},

]