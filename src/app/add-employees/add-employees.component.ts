import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employees',
  templateUrl: './add-employees.component.html',
  styleUrls: ['./add-employees.component.css']
})
export class AddEmployeesComponent {
  employeeDetails:any={}

  constructor(private api:ApiService,private route:Router){}
 addEmployee(){
  this.api.addEmployees(this.employeeDetails).subscribe((data:any)=>{
    this.route.navigateByUrl('employees')
  })
 }

}
