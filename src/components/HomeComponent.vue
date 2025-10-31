<template>
    <h1>Home</h1>
    <h3 style="color:blue">{{mensaje}}</h3>
</template>

<script>
import ServiceEjemplo from './../services/ServiceEjemplo'
const service = new ServiceEjemplo();
    export default{
        name: "HomeComponent", 
        data(){
            return{
                mensaje:""
            }
        },
        mounted(){
            this.mensaje = service.getSaludo("Alejandro")
        }
    }
</script>