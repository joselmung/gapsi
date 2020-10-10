
const api = 'https://node-red-nxdup.mybluemix.net';

class BaseApi {
  constructor(url) {
    this.api = api;
    this.url = `${this.api}/${url}`;
    this.headers = {};
  }

  getAll(paginator = 0) {
    return fetch(`${this.url}/${paginator}`, {
      headers: this.headers,
      method: "GET",
    });
  }

  getOne = (id) => {
    return fetch(`${this.url}/${id}`, { headers: this.headers, method: "GET" });
  };

  create = (object) => {
    return new Promise((resolve, reject) => {
      fetch(`${this.url}`, {
        headers: this.headers,
        body: JSON.stringify(object),
        method: "POST",
      })
        .then((response) => {
          if(response.ok){
            return response.json();
          }else{
             reject('error');
          }
          
        })
        .then((data) => {
           resolve(data);
        });
    });
  };

  update = (object) => {
    return fetch(`${this.url}`, {
      headers: this.headers,
      body: JSON.stringify(object),
      method: "PUT",
    });
  };
}
  
  export default BaseApi;