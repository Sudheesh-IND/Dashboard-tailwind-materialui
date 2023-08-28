import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';


@Component({
  selector: 'app-review-pie',
  templateUrl: './review-pie.component.html',
  styleUrls: ['./review-pie.component.css']
})
export class ReviewPieComponent {
  Highcharts=Highcharts
  chartOptions={}

  constructor(){
    
    this.chartOptions={
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Rating by customers',
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
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            }
        }
    },
    series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [{
            name: '5 star rating',
            y: 58,
            sliced: true,
            selected: true
        }, {
            name: '4 star rating',
            y: 25
        },  {
            name: '3 star rating',
            y: 17
        }, {
            name: '2 star rating',
            y:5
        }, {
            name: '1 star rating',
            y: 3
        }]
    }]
    }
  }

}
