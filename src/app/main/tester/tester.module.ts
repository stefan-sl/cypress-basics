import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TesterRoutingModule } from './tester-routing.module';
import { TesterComponent } from './tester.component';


@NgModule({
  declarations: [
    TesterComponent
  ],
  imports: [
    CommonModule,
    TesterRoutingModule
  ]
})
export class TesterModule { }
