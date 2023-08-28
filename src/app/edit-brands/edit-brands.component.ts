import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-edit-brands',
  templateUrl: './edit-brands.component.html',
  styleUrls: ['./edit-brands.component.css']
})
export class EditBrandsComponent implements OnInit{

  brandDetails:any={}
  brandId:string=''
  constructor(private activatedRoute:ActivatedRoute,private api:ApiService,private route:Router){}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data:any)=>{
      this.brandId=data.id
    })
    this.api.getSpecificBrand(this.brandId).subscribe((data:any)=>{
      this.brandDetails=data
    })
  }
 editBrands(){
   this.api.editBrands(this.brandId,this.brandDetails).subscribe((data:any)=>{
    this.route.navigateByUrl('brands')
   })
 }
  

}
