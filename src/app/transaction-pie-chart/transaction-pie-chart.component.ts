import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';


@Component({
  selector: 'app-transaction-pie-chart',
  templateUrl: './transaction-pie-chart.component.html',
  styleUrls: ['./transaction-pie-chart.component.css']
})
export class TransactionPieChartComponent {
  Highcharts=Highcharts
  chartOptions={}
  
  constructor(){
    this.chartOptions={
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false
    },
    title: {
        text: 'Income,<br>Expenditure<br> and Profit',
        align: 'center',
        verticalAlign: 'middle',
        y: 60
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
            dataLabels: {
                enabled: true,
                distance: -50,
                style: {
                    fontWeight: 'bold',
                    color: 'white'
                }
            },
            startAngle: -90,
            endAngle: 90,
            center: ['50%', '75%'],
            size: '110%'
        }
    },
    series: [{
        type: 'pie',
        name: 'Accounts',
        innerSize: '50%',
        data: [
            ['Income', 70],
            ['Profit', 50],
            ['Expenditure',25 ],
            
            {
              
                dataLabels: {
                    enabled: false
                }
            }
        ]
    }]
    }
  }
}
