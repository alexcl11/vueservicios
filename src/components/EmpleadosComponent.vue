<template>
    <h1>Empleados</h1>
    
    <div class="container w-25">        
        <select @change="getEmpleado(idEmpleadoSeleccionado)" class="form-select" v-model="idEmpleadoSeleccionado">
            <option v-for="empleado in empleados" :key="empleado.idEmpleado" :value="empleado.idEmpleado">{{empleado.idEmpleado}} - {{empleado.apellido}}</option>
        </select>
    </div>

    <div class="container w-50 mt-4" v-if="empleadoDetalles">
        <div class="card shadow-sm">
            <div class="card-header bg-primary text-white d-flex justify-content-between align-items-center">
                <h3 class="mb-0">Detalles del Empleado</h3>
                <button @click="empleadoDetalles = null" class="btn btn-outline-light btn-sm">
                    <i class="bi bi-x-lg"></i> Cerrar
                </button>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-md-6">
                        <h4 class="text-primary mb-3">{{empleadoDetalles.apellido}}</h4>
                        <div class="mb-3">
                            <h6 class="text-muted">Oficio</h6>
                            <p class="mb-1"><strong>{{empleadoDetalles.oficio}}</strong></p>
                        </div>
                        <div class="mb-3">
                            <h6 class="text-muted">ID Empleado</h6>
                            <span class="badge bg-secondary">{{empleadoDetalles.idEmpleado}}</span>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="mb-3">
                            <h6 class="text-muted">ID Departamento</h6>
                            <p class="mb-1">
                                {{empleadoDetalles.departamento}} 
                            </p>
                        </div>
                        
                        <div class="mb-3">
                            <h6 class="text-muted">Salario</h6>
                            <p class="mb-1">
                                {{empleadoDetalles.salario}} €
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Global from './../Global';
    import axios from 'axios'

    let urlEmpleados = Global.urlEmpleados;

    export default{
        
        name: "EmpleadosComponent",
        data(){
            return{
                empleados: [],
                idEmpleadoSeleccionado: null,
                empleadoDetalles: null
            }
        }, 
        mounted(){
            let request = "api/empleados";
            axios.get(urlEmpleados+request).then(response => {
                console.log(response.data)
                this.empleados = response.data
            })
        }, 
        methods: {
            getEmpleado(id) {
                let request = "api/empleados/"+id;
                axios.get(urlEmpleados+request).then(response => {
                    this.empleadoDetalles = response.data
                })
            }
        }
}
</script>