import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MainContentComponent } from './main-content/main-content.component';
import {MatCardModule} from '@angular/material/card';
import { AreaChartDashComponent } from './area-chart-dash/area-chart-dash.component';
import { CardDashComponent } from './card-dash/card-dash.component';
import { PieDashComponent } from './pie-dash/pie-dash.component';
import { TableDashComponent } from './table-dash/table-dash.component';
import { HighchartsChartModule } from 'highcharts-angular';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { BrandsComponent } from './brands/brands.component';
import { CarServiceComponent } from './car-service/car-service.component';
import { CardCarServiceComponent } from './card-car-service/card-car-service.component';
import { AreaChartServiceComponent } from './area-chart-service/area-chart-service.component';

import { ServiceTableComponent } from './service-table/service-table.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { AddBrandsComponent } from './add-brands/add-brands.component';
import { EmployeesComponent } from './employees/employees.component';
import { AddEmployeesComponent } from './add-employees/add-employees.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { EditBrandsComponent } from './edit-brands/edit-brands.component';
import { CardTransactionsComponent } from './card-transactions/card-transactions.component';
import { TransactionBarChartComponent } from './transaction-bar-chart/transaction-bar-chart.component';
import { TransactionPieChartComponent } from './transaction-pie-chart/transaction-pie-chart.component';
import { ReviewComponent } from './review/review.component';
import { ReviewCardComponent } from './review-card/review-card.component';
import { ReviewPieComponent } from './review-pie/review-pie.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    MainContentComponent,
    AreaChartDashComponent,
    CardDashComponent,
    PieDashComponent,
    TableDashComponent,
    BrandsComponent,
    CarServiceComponent,
    CardCarServiceComponent,
    AreaChartServiceComponent,
    ServiceTableComponent,
    TransactionsComponent,
    AddBrandsComponent,
    EmployeesComponent,
    AddEmployeesComponent,
    EditEmployeeComponent,
    EditBrandsComponent,
    CardTransactionsComponent,
    TransactionBarChartComponent,
    TransactionPieChartComponent,
    ReviewComponent,
    ReviewCardComponent,
    ReviewPieComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MatCardModule,
    HighchartsChartModule,
    MatTableModule,
    MatPaginatorModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
