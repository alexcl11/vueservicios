<template>
    <div class="container mt-4">
        <h1 class="text-center mb-4">Galería de Coches</h1>
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            <div class="col" v-for="coche in coches" :key="coche.idcoche">
                <div class="card h-100 shadow-sm">
                    <img :src="coche.imagen" class="card-img-top" :alt="coche.marca + ' ' + coche.modelo"
                         style="height: 200px; object-fit: cover;">
                    <div class="card-body">
                        <h5 class="card-title text-primary">{{coche.marca}} {{coche.modelo}}</h5>
                        <div class="d-flex justify-content-between align-items-center mb-2">
                            <span class="badge bg-secondary">ID: {{coche.idcoche}}</span>
                            
                        </div>
                        <p class="card-text">
                            <small class="text-muted">Conductor:</small>
                            <i class="bi bi-person-circle me-2"></i>
                            {{coche.conductor}}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

// <script>
// import axios from 'axios'
// import Global from './../Global.js'
import ServiceCoche from './../services/ServiceCoche'

let service = new ServiceCoche()

// let urlApi = Global.urlApi;
    export default{
        name: "CochesComponent", 
        data(){
            return{
                coches: []
            }
        },
        mounted(){
            //UNA PROMESA NO ES UN MÉTODO, ES UN OBJETO
            service.getCoches().then(response => {
                this.coches = response
            })

            // let request = "webresources/coches";
            // //  LAS VARIABLES DECLARARDAS FUERA DEL NO EXPORT UTILIZAN this

            // axios.get(urlApi+request).then(response => {
            //     this.coches = response.data
            // })
        }
    }
</script>