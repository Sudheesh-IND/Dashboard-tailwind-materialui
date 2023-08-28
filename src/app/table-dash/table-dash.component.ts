import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table-dash',
  templateUrl: './table-dash.component.html',
  styleUrls: ['./table-dash.component.css']
})

export class TableDashComponent implements AfterViewInit {
 
  displayedColumns: string[] = ['no','Customer', 'Brand', 'Year', 'Rate'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: any;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
export interface PeriodicElement {
  no:number;
  Customer: string;
  Brand: string;
  Year: number;
  Rate: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {no:1,Customer: 'John', Brand: 'Maruti', Year: 2023, Rate: '12L'},
  {no:2,Customer: 'Victor', Brand: 'Maruti', Year: 2023, Rate: '12L'},
  {no:3,Customer: 'Walter White', Brand: 'Maruti', Year: 2023, Rate: '12L'},
  {no:4,Customer: 'Jon Snow', Brand: 'Maruti', Year: 2023, Rate: '12L'},
  {no:5,Customer: 'Michael Scofield', Brand: 'Maruti', Year: 2023, Rate: '12L'},
  {no:6,Customer: 'Khal Drogo', Brand: 'Maruti', Year: 2023, Rate: '12L'},
  {no:7,Customer: 'Sudheesh S', Brand: 'Maruti', Year: 2023, Rate: '12L'},
  {no:8,Customer: 'Sudheesh S', Brand: 'Maruti', Year: 2023, Rate: '12L'},
  
];