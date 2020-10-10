import BaseApi from './BaseApi';
const mode = localStorage.getItem('user') !== null ? 'user' : 'visitor';
class User extends BaseApi {

    constructor(){
        super(mode);
    }
   
    async getAll(){
        if(mode === 'visitor'){
          const visitor = await  this.create();
          return visitor.data;       
        }
    }
    
}

const instance = new User();
Object.freeze(instance);

export default instance;