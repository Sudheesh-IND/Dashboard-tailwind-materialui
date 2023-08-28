import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-transactions',
  templateUrl: './card-transactions.component.html',
  styleUrls: ['./card-transactions.component.css']
})
export class CardTransactionsComponent {


     @Input() title:string=''
     @Input() total:string=''
}
