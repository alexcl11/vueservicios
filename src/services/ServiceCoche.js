import axios from "axios";
import Global from "@/Global";

export default class ServiceCoche {
    getCoches() {

        return new Promise(function(resolve) {
        let coches = [];
        let request = "webresources/coches";
        let url = Global.urlApi + request;
        axios.get(url).then(response => {
            coches = response.data
            resolve(coches)
        })
        
        }) 
    }
}