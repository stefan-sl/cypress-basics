import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TesterRoutingModule } from './tester-routing.module';
import { TesterComponent } from './tester.component';

@NgModule({
  declarations: [
    TesterComponent
  ],
  imports: [
    CommonModule,
    TesterRoutingModule
  ],
  providers: []
})
export class TesterModule { }
