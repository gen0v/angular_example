import { Config } from './../config';
import { Component, OnInit, NgModule } from '@angular/core';
import { TempReaderService } from '../temp-reader.service';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { Chart } from 'chart.js';



@Component({
  selector: 'app-my-bar-chart',
  templateUrl: './my-bar-chart.component.html',
  styleUrls: ['./my-bar-chart.component.css']
})



export class MyBarChartComponent implements OnInit {
  constructor(private tempReader: TempReaderService, private http: HttpClient) { }
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales: {
      yAxes: [{
        ticks: {
        beginAtZero : true,
        max: 60
        }
      }]
  }
  };

  //public labels: string[];

  public barChartType = 'line';
  public barChartLegend = true;
  //public barChartOptions = {}
  /*
  public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  */
  public barChartData = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];
  barChartLables: string[];


  chart: any;

  labels: string[] = [];
  datas: number[] = [];

  dataArr: {data: number[] , label: string}[] = [];

  config: Config;

  showConfig() {
    this.tempReader.getJsonData().subscribe(data => {
      console.log(data[0]);
  });
  }

  numbers: number[];

  showConfig2() {
    this.tempReader.getJsonData().subscribe(data => {
      //console.log(data[0]['data']);
      this.numbers = data[0]['data'];
      console.log(this.numbers);
  });
  }


  showConfig3() {
    this.tempReader.getTextData().subscribe(data => {
      //this.barChartLables = new string();

      let myd = data as string;
      let myd_a = myd.toString().split('\n');
      let elem : string[];

      myd_a.forEach(element => {
        if(element.length > 1){
          elem = element.split(' ');
          //this.barChartLables.push(elem[1].toString());
          console.log('Temp:' + elem[0] + ' Time: ' + elem[1]);
          this.datas.push(parseInt(elem[0]));
          this.labels.push(elem[1]);
        }
      });
      console.log(this.datas);
      let test = [{data: this.datas, label: 'Tempe'}];
      //this.dataArr.push({data: [], label: 'Temp'});
      this.dataArr = test;

      //console.log(this.dataArr);
      //this.dataArr = this.barChartData;
      //console.log(myd);
      //this.numbers = data[0]['data'];
      //console.log(this.numbers);
 


  });
  }


  ngOnInit() {

    //this.showConfig2();
    this.showConfig3();




  }


}


