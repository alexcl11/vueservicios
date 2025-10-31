<template>
    <h1>
        Customers
    </h1>
    <div class="container d-flex my-5">
        <input class="form-control mx-3" placeholder="ID" v-model="idCustomerDetalles" type="text" style="width:25%"/>
        <button @click="this.getCustomer(idCustomerDetalles)" class="btn btn-primary">Buscar</button>
    </div>
    <div class="container mt-4" v-if="customerDetalles && status">
        <div class="card shadow-sm">
            <div class="card-header bg-primary text-white d-flex justify-content-between align-items-center">
                <h3 class="mb-0">Detalles del Cliente</h3>
                <button @click="customerDetalles = null; this.status = false" class="btn btn-outline-light btn-sm">
                    <i class="bi bi-x-lg"></i> Cerrar
                </button>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-md-6">
                        <h4 class="text-primary mb-3">{{customerDetalles.CompanyName}}</h4>
                        <div class="mb-3">
                            <h6 class="text-muted">Contacto</h6>
                            <p class="mb-1"><strong>{{customerDetalles.ContactName}}</strong></p>
                            <p class="text-muted">{{customerDetalles.ContactTitle}}</p>
                        </div>
                        <div class="mb-3">
                            <h6 class="text-muted">ID Cliente</h6>
                            <span class="badge bg-secondary">{{customerDetalles.CustomerID}}</span>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="mb-3">
                            <h6 class="text-muted">Dirección</h6>
                            <address class="mb-0">
                                {{customerDetalles.Address}}<br>
                                {{customerDetalles.City}}, {{customerDetalles.PostalCode}}<br>
                                <span v-if="customerDetalles.Region">{{customerDetalles.Region}}, </span>
                                {{customerDetalles.Country}}
                            </address>
                        </div>
                        <div class="mb-3">
                            <h6 class="text-muted">Contacto</h6>
                            <p class="mb-1">
                                <i class="bi bi-telephone me-2"></i>
                                {{customerDetalles.Phone}}
                            </p>
                            <p class="mb-0" v-if="customerDetalles.Fax">
                                <i class="bi bi-printer me-2"></i>
                                {{customerDetalles.Fax}}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container" v-if="status && !customerDetalles">
        <div class="card shadow-sm">
            <div class="card-header bg-primary text-white d-flex justify-content-between align-items-center">
                <h3 class="mb-0">Detalles del Cliente</h3>
                <button @click="customerDetalles = null; status= false" class="btn btn-outline-light btn-sm">
                    <i class="bi bi-x-lg"></i> Cerrar
                </button>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-md-6 d-flex ">
                        <img src="./../assets/loading.gif" style="width:30px; height:30px"/>
                        <h4 class="text-primary mb-3 mx-3">No se encuentra al cliente</h4>                        
                    </div>                    
                </div>
            </div>
        </div>
    </div>
    <div class="container mt-4" v-if="statusTabla">
        <table class="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Compañia</th>
                    <th></th>
                </tr>
            </thead>
            <tbody v-for="customer in customers" :key="customer">
                <tr>
                    <td>{{customer.CustomerID}}</td>
                    <td>{{customer.ContactName}}</td>
                    <td>{{customer.CompanyName}}</td>
                    <td><button @click="this.getCustomer(customer.CustomerID)" class="btn btn-primary">Detalles</button></td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="container mt-4" v-else>
        <img src="./../assets/loading.gif"/>
    </div>
</template>

<script>
    // import Global from './../Global.js'
    // import axios from 'axios'
    // let urlCustomers = Global.urlCustomers
    import ServiceCustomers from './../services/ServiceCustomers'
    const service = new ServiceCustomers()
    export default {
        name: "CustomersComponent",
        data(){
            return{
                customers: [],
                customerDetalles: null, 
                idCustomerDetalles: "",
                status: false,
                statusTabla: false,
            }
        }, 
        mounted(){
            service.getCustomers().then(response =>{
                this.customers = response
                this.statusTabla = true
            })  
        }, 
        methods: {
            getCustomer(id) {
                service.getCustomer(id).then(response => {
                    this.customerDetalles = response
                    console.log(this.customerDetalles)
                    this.status = true
                })
            }
        }
    }
</script>