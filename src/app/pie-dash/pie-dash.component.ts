import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-pie-dash',
  templateUrl: './pie-dash.component.html',
  styleUrls: ['./pie-dash.component.css']
})
export class PieDashComponent {
  Highcharts=Highcharts
  chartOptions={}


  constructor(){
    
    this.chartOptions={
 
// Build the chart

    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Car sold per company',
        align: 'center'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    credits:{
        enabled:false
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            // colors,
            borderRadius: 5,
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b><br>{point.percentage:.1f} %',
                distance: -50,
                filter: {
                    property: 'percentage',
                    operator: '>',
                    value: 4
                }
            }
        }
    },
    series: [{
        name: 'Share',
        data: [
            { name: 'Maruti Suzuki', y: 74.03 },
            { name: 'Hyundai', y: 12.66 },
            { name: 'Toyota', y: 4.96 },
            { name: 'Tata', y: 2.49 },
            { name: 'Kia', y: 2.31 },
            { name: 'Other', y: 3.398 }
        ]
    }]

    }
  }
}
