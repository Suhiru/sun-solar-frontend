import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestapiService {

  constructor(private http:HttpClient) { }

  login(username:string,password:string){
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.http.get("http://localhost:8080/login",{headers,responseType: 'text' as 'json'})
  }
  
    insertCustomer(customer) {
     let username='admin'
      let password='abc123'
     const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
     return  this.http.post("http://localhost:8080/insertCustomer",customer,{headers});
    }

    
    insertProject(project) {
    let username='admin'
    let password='abc123'
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return  this.http.post("http://localhost:8080/insertProject",project,{headers});
     
    }

}
