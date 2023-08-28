import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit{
  employeeDetails:any={}
  constructor(private api:ApiService){}
  ngOnInit(): void {
   this.getEmployee()
  }
  getEmployee(){
    this.api.getEmployee().subscribe((data:any)=>{
      this.employeeDetails=data
    })
  }
   
  deleteItem(employeeId:string){
     this.api.deleteItem(employeeId).subscribe((data:any)=>{
      this.getEmployee()
      alert('Employee details deleted')
     })
  }
}
