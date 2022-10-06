import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  [x: string]: any
  highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Historic World Population by Region'
    },
    subtitle: {
      text: 'Source: Wikipedia.org'
    },
    legend: {
      layout: 'vertical',
      align: 'left',
      verticalAlign: 'top',
      x: 250,
      y: 100,
      floating: true,
      borderWidth: 1,


    },
    xAxis: {
      categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'], title: {
        text: null
      }
    },
    yAxis: {
      min: 0, title: {
        text: 'Population (millions)', align: 'high'
      },
      labels: {
        overflow: 'justify'
      }
    },
    tooltip: {
      valueSuffix: ' millions'
    },
    plotOptions: {
      bar: {
        dataLabels: {
          enabled: true
        }
      }
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'Year 1800',
        type: 'bar',
        data: [107, 31, 635, 203, 7]
      },
      {
        name: 'Year 1900',
        type: 'bar',
        data: [133, 156, 947, 408, 20]
      },
      {
        name: 'Year 2008',
        type: 'bar',
        data: [973, 914, 4054, 732, 34]
      }
    ]
  };


  // column chart

  highcharts1 = Highcharts;
  chartOptions1: Highcharts.Options = {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Monthly Average Rainfall'
    },
    subtitle: {
      text: 'Source: WorldClimate.com'
    },
    xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
        'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      crosshair: true
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Rainfall (mm)'
      }
    },
    tooltip: {
      headerFormat: '<span style = "font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style = "color:{series.color};padding:0">{series.name}: </td>' +
        '<td style = "padding:0"><b>{point.y:.1f} mm</b></td></tr>', footerFormat: '</table>', shared: true, useHTML: true
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0
      }
    },
    series: [{
      name: 'China',
      type: 'column',
      data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6,
        148.5, 216.4, 194.1, 95.6, 54.4]
    },
    {
      name: 'India',
      type: 'column',
      data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3,
        91.2, 83.5, 106.6, 92.3]
    },
    {
      name: 'Tokyo',
      type: 'column',
      data: [40, 44, 11, 88, 70, 39, 89.4, 101.10, 42, 87, 44, 77]
    },
    {
      name: 'London',
      type: 'column',
      data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6,
        52.4, 65.2, 59.3, 51.2]
    },

    {
      name: 'Sri lanka',
      type: 'column',
      data: [83.2, 92.9, 107, 100.92, 88, 51.2, 59.0, 110.0, 47.0, 48.3, 59.0]
    },
    {
      name: 'New York',
      type: 'column',
      data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4,
        47.6, 39.1, 46.8, 51.1]
    }]
  };

  // Pie chart
  highcharts2 = Highcharts;
  chartOptions2: Highcharts.Options = {
    chart: {
      plotShadow: false
    },
    title: {
      text: 'Browser market shares at a specific website, 2021'
    },
    tooltip: {
      pointFormat: '{series.name}:  <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        // dataLabels: {
        //   enabled: true,
        //   format: '<b>{point.name}%</b>: {point.percentage:.1f} %',
        //   style: {
        //     color: (Highcharts.theme && Highcharts.theme.contrastTextColor) ||
        //       'black'
        //   }
        // }
      }
    },
    series: [{
      type: 'pie',
      name: 'Browser share',
      data: [
        ['Firefox', 45.0],
        ['IE', 26.8],
        {
          name: 'Chrome',
          y: 12.8,
          sliced: true,
          selected: true
        },
        ['Safari', 8.5],
        ['Opera', 6.2],
        ['Others', 0.7]
      ]
    }]
  };
}
