import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PadreComponentComponent } from './models2-routing/padre-component/padre-component.component';
import { PadreComponent } from './models1-routing/padre/padre.component';
const routes: Routes = [
  {
    path: 'cubo',
    component: PadreComponentComponent
  },
  {
    path: "",
    component: PadreComponent
  },
 
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
