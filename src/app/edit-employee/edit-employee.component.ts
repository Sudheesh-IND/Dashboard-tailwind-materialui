import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit{
   
  employeeDetails:any={}
  employeeId:string=''
  constructor(private activatedRoute:ActivatedRoute,private api:ApiService,private route:Router){}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data:any)=>{
      this.employeeId=data.id
    })
    this.api.getSpecificEmployee(this.employeeId).subscribe((data:any)=>{
      console.log(data)
      this.employeeDetails=data
    })
  }
  editEmployee(){
    this.api.editEmployee(this.employeeId,this.employeeDetails).subscribe((data:any)=>{
         this.route.navigateByUrl('employees')
    })
  }
}
