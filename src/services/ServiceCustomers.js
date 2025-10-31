import Global from "@/Global";
import axios from "axios";

export default class ServiceCustomers {
    getCustomers(){
        return new Promise(function(resolve){
            let customers = []
            let url = Global.urlCustomers
            axios.get(url).then(response =>{
                customers = response.data.value
                resolve(customers)
            })  
        })
    }
    getCustomer(id){    
        return new Promise(function(resolve) {
            
            let customers = []
            let url = Global.urlCustomers
            axios.get(url).then(response =>{
                customers = response.data.value
            })            
            const customerDetalles = customers.find(c => c.CustomerID == id) || null;
            resolve(customerDetalles);
        }) 
        
    }
}