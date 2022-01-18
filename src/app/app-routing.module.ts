import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TesterComponent } from './tester/tester.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./main/main.module').then(m => m.MainModule),
  },
  {
    path: 'tests',
    loadChildren: () => import('./tester/tester.module').then(m => m.TesterModule),
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
