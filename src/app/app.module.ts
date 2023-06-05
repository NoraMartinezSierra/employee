import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeSearchComponent } from './components/employee-search/employee-search.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'',  pathMatch: 'full', redirectTo: '/employe-list'},
  { path: 'employe-list', component: EmployeeListComponent },
  { path: 'employe-search', component: EmployeeSearchComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
