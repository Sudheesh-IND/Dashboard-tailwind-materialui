import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-area-chart-service',
  templateUrl: './area-chart-service.component.html',
  styleUrls: ['./area-chart-service.component.css']
})
export class AreaChartServiceComponent {
          Highcharts=Highcharts
          chartOptions={}

          constructor(){
            this.chartOptions={
              chart: {
                type: 'areaspline'
            },
            title: {
                text: 'Service year by year',
                align: 'center'
            },
            // subtitle: {
            //     text: 'Source: <a href="https://www.ssb.no/jord-skog-jakt-og-fiskeri/jakt" target="_blank">SSB</a>',
            //     align: 'left'
            // },
            legend: {
                layout: 'vertical',
                align: 'left',
                verticalAlign: 'top',
                x: 120,
                y: 70,
                floating: true,
                borderWidth: 1,
                // backgroundColor:
                //     Highcharts.Options.legend.backgroundColor || '#FFFFFF'
            },
            xAxis: {
                plotBands: [{ // Highlight the two last years
                    from: 2019,
                    to: 2023,
                    color: 'rgba(68, 170, 213, .2)'
                }]
            },
            yAxis: {
                title: {
                    text: 'Quantity'
                }
            },
            tooltip: {
                shared: true,
                headerFormat: '<b> {point.x}</b><br>'
            },
            credits: {
                enabled: false
            },
            plotOptions: {
                series: {
                    pointStart: 2000
                },
                areaspline: {
                    fillOpacity: 0.5
                }
            },
            series: [ {
                name: 'Number of cars',
                data:
                    [
                        22534,
                        23599,
                        24533,
                        25195,
                        25896,
                        27635,
                        29173,
                        32646,
                        35686,
                        37709,
                        39143,
                        36829,
                        35031,
                        36202,
                        35140,
                        33718,
                        37773,
                        42556,
                        43820,
                        46445,
                        50048
                    ]
            }]
       
        
            }
          }
}
