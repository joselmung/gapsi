import BaseApi from './BaseApi';
let serviceUrl = `productos`;
class Product extends BaseApi {
    constructor(){
        super(serviceUrl)
    }

    /*async getAll(product='',paginator){
        this.url = `${this.url}/${product}`;
        return this.getAll(paginator);
    } */
}

const instance = new Product();
Object.freeze(instance);

export default instance;