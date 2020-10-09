import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FlexLayoutComponent} from './flex-layout/flex-layout.component';
import {CssGridComponent} from './css-grid/css-grid.component';
import {CssLoadersComponent} from './css-loaders/css-loaders.component';
import {CssFlexComponent} from './css-flex/css-flex.component';

const routes: Routes = [
  { path: 'flex-layout', component: FlexLayoutComponent },
  { path: 'css-grid', component: CssGridComponent },
  { path: 'css-loaders', component: CssLoadersComponent },
  { path: 'css-flex', component: CssFlexComponent },
  { path: '**', redirectTo: '/css-flex' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
