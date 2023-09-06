import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private url = "http://localhost:8080/";

  constructor(private http:HttpClient) { }

  //Add Customer

  addCustomer(customer:Customer){
    return this.http.post<Customer>(`${this.url}add`,customer);
  }

  //get customer
  getCustomer():Observable<any[]>{
    return this.http.get<any[]>(this.url+'customers');
  }
  //get customer by id
  getCustomerById(id:number):Observable<Customer>{
    return this.http.get<Customer>(`${this.url}customer/${id}`);
  }

  //update customer
  updateCustomer(id?:number,customer?:any):Observable<any>{
    return this.http.put<any>(`${this.url}update/${id}`,customer);
  }

  //delete customer
  deleteCustomer(id:number):Observable<any>{
    return this.http.delete<any>(`${this.url}delete/${id}`);
  }
}
