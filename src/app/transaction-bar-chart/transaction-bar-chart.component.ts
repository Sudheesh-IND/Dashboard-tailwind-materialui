import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-transaction-bar-chart',
  templateUrl: './transaction-bar-chart.component.html',
  styleUrls: ['./transaction-bar-chart.component.css']
})
export class TransactionBarChartComponent {
  Highcharts=Highcharts
  chartOptions={}

  constructor(){
    this.chartOptions={
      chart: {
        type: 'column'
    },
    title: {
        text: 'Income,Expenditure and Profit'
    },
    
    xAxis: {
        categories: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec'
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Rate of amount'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    credits:{
      enabled:false
  },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: 'Income',
        data: [130, 120, 140, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4,
            194.1, 180, 140]

    }, {
        name: 'Profit',
        data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5,
            106.6, 92.3]

    }, {
        name: 'Expenditure',
        data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3,
            51.2]

    }]
    }
  }

}
