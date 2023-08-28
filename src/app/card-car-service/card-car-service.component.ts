import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-card-car-service',
  templateUrl: './card-car-service.component.html',
  styleUrls: ['./card-car-service.component.css']
})
export class CardCarServiceComponent {
       
  @Input() title=""
  @Input() count=""
}
