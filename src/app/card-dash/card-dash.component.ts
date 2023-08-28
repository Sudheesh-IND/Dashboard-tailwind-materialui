import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-dash',
  templateUrl: './card-dash.component.html',
  styleUrls: ['./card-dash.component.css']
})
export class CardDashComponent {
    @Input() icon:string=""
    @Input() bg:string=""
    @Input() title:string=""
    @Input() total:string=""
}
