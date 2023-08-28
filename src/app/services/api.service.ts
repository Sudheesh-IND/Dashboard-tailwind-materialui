import { HttpClient } from '@angular/common/http';
import { Injectable, } from '@angular/core';
import { Observable } from 'rxjs';
import { CarCustomer } from 'src/model/customer';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  

  addBrands(body:any){
    return this.http.post(' http://localhost:3000/posts',body)
  }
  getBrands(){
    return this.http.get(' http://localhost:3000/posts')
  }
  addEmployees(body:any){
    return this.http.post(' http://localhost:3000/employeees',body)
  }
  getEmployee(){
    return this.http.get(' http://localhost:3000/employeees')
  }
  getSpecificEmployee(employeeId:any){
    return this.http.get(` http://localhost:3000/employeees/${employeeId}`)
  }
  editEmployee(employeeId:string,body:any){
    return this.http.put(` http://localhost:3000/employeees/${employeeId}`,body)
  }
  deleteItem(employeeId:string){
    return this.http.delete(` http://localhost:3000/employeees/${employeeId}`)
  }
  deleteBrand(brandId:string){
    return this.http.delete(` http://localhost:3000/posts/${brandId}`)
  }
  getSpecificBrand(brandId:string){
    return this.http.get(` http://localhost:3000/posts/${brandId}`)
  }
  editBrands(brandId:string,body:any){
    return this.http.put(` http://localhost:3000/posts/${brandId}`,body)
  }
}
