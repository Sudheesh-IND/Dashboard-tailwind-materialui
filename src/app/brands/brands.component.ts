import { Component,OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit{
  brandDetails:any={}
 

  constructor(private api:ApiService,private activatedRoute:ActivatedRoute,private route:Router){}
   ngOnInit(): void {
    this.getBrands()
   
   }
   getBrands(){
    this.api.getBrands().subscribe((data:any)=>{
      this.brandDetails=data
    })
   }
   

  deleteBrand(brandId:string){
    this.api.deleteBrand(brandId).subscribe((data:any)=>{
       this.getBrands()
    })
  }
  

}
