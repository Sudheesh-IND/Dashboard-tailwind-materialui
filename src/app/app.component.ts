import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DashboardProject';

  sidebar:boolean=true

  openSidebar(){
    this.sidebar=!this.sidebar
  }
}
