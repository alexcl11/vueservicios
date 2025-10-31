import axios from "axios";
import Global from "@/Global";
export default class ServiceEmpleados {
    getEmpleados(){
        return new Promise(function(resolve) {
            let empleados = []
            let request = `api/empleados/`
            let url = Global.urlEmpleados+request
            axios.get(url).then(response => {
            empleados = response.data
            resolve(empleados)
            })
        })
    }
    getEmpleado(id) {
        return new Promise(function(resolve) {
            let empleado = []
            let request = "api/empleados/"+id;
            let url = Global.urlEmpleados+request
            axios.get(url).then(response => {
                empleado = response.data
                resolve(empleado)
            })
        })
    }
    getOficios(){
        return new Promise(function(resolve) {
            let oficios = []
            let request = 'api/empleados/oficios'
            let url = Global.urlEmpleados+request
            axios.get(url).then(response => {
                oficios = response.data
                resolve(oficios)
            })
        })
    }
    getEmpleadosOficio(oficio) {
        return new Promise(function(resolve) {
            let empleados = []
            let request = `api/empleados/empleadosoficio/${oficio}`
            let url = Global.urlEmpleados+request
            axios.get(url).then(response => {
            empleados = response.data
            resolve(empleados)
            })
        })
    }

}