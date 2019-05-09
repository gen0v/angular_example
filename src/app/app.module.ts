import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ChartsModule } from 'ng2-charts';
import { MyBarChartComponent } from './my-bar-chart/my-bar-chart.component';

import { Routes, RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {path: 'bar-chart', component: MyBarChartComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MyBarChartComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
    ChartsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


