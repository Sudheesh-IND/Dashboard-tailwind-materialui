import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { BrandsComponent } from './brands/brands.component';
import { CarServiceComponent } from './car-service/car-service.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { AddBrandsComponent } from './add-brands/add-brands.component';
import { EmployeesComponent } from './employees/employees.component';
import { AddEmployeesComponent } from './add-employees/add-employees.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { EditBrandsComponent } from './edit-brands/edit-brands.component';
import { ReviewComponent } from './review/review.component';


const routes: Routes = [
  {
    path:'',component:MainContentComponent
  },
  {
    path:'brands',component:BrandsComponent
  },
  {
    path:'service',component:CarServiceComponent
  },
  {
    path:'transactions',component:TransactionsComponent
  },
  {
    path:'add-brands',component:AddBrandsComponent
  },
  {
    path:'employees',component:EmployeesComponent
  },
  {
    path:'add-employees',component: AddEmployeesComponent 
  },
  {
    path:'edit-employee/:id',component:EditEmployeeComponent
  },
  {
    path:'edit-brands/:id',component:EditBrandsComponent
  },
  {
    path:'review',component:ReviewComponent
  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
