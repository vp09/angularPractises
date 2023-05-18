import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import {CompcomComponent} from '././compcom/compcom.component'
import{CustomerListComponent} from '././customer-list/customer-list.component'
import {CustomerDetailComponent} from '././customer-detail/customer-detail.component'

const routes:  Routes=[
  {path:'home', component:AppComponent},
  {
    path: '',
    redirectTo: '/customerList',
    pathMatch: 'full'
},
  
  
  {path:'componentcommunication', component:CompcomComponent},
  {path:'customerList', component:CustomerListComponent},
  {path:'customerDetails', component:CustomerDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
