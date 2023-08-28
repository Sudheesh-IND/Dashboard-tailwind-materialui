import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-brands',
  templateUrl: './add-brands.component.html',
  styleUrls: ['./add-brands.component.css']
})
export class AddBrandsComponent {

  brandDetails:any={}
  constructor(private api:ApiService,private route:Router){}

  addBrands(){
     this.api.addBrands(this.brandDetails).subscribe((res)=>{
       this.route.navigateByUrl('brands')
     })
  }

}
