<template>
    <h1>Empleados por oficio</h1>
    <div class="container mt-4">
        <h5 style="text-align: left">Oficio: {{this.$route.params.oficio}}</h5>
        <table class="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Apellido</th>
                    <th>Oficio</th>
                    <th>Salario</th>
                    <th>ID Departamento</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="empleado in empleados" :key="empleado">
                    <td>{{empleado.idEmpleado}}</td>
                    <td>{{empleado.apellido}}</td>
                    <td>{{empleado.oficio}}</td>
                    <td>{{empleado.salario}} €</td>
                    <td>{{empleado.departamento}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
// import axios from 'axios'
// import Global from '@/Global'

// let urlEmpleados = Global.urlEmpleados

import ServiceEmpleados from './../services/ServiceEmpleados'
const service = new ServiceEmpleados()

    export default {
        name: "EmpleadosOficios", 
        data(){
            return{
                empleados: []
            }
        }, 
        methods:{
            loadEmpleados(){
                service.getEmpleadosOficio(this.$route.params.oficio).then(response => {
                    this.empleados = response
                })
            }
        },        
        watch:{
            "$route.params.oficio"(oldVal, newVal){
                if(oldVal!=newVal){
                    this.loadEmpleados() 
                }
            }
        },
        mounted(){
          this.loadEmpleados()  
        }
    }
</script>