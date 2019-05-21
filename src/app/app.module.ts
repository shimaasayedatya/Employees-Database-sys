import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule ,Routes }from '@angular/router';


import { AngularFireDatabase } from "angularfire2/database-deprecated";


import { AngularFireModule } from 'angularfire2';
// import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

import { AngularFireDatabaseModule } from "angularfire2/database-deprecated";
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EmployeeInfoComponent } from './components/employee-info/employee-info.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SettingsComponent } from './components/settings/settings.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import{ EmployeeService } from './services/employee.service';
import { EmployeesComponent } from './components/employees/employees.component';




export const firebaseConfig = {

  apiKey: "AIzaSyCPecMRcpLaMQzQTrWAPYSuOEPPlHIXjzg",
    authDomain: "employeemanagement-3e150.firebaseapp.com",
    databaseURL: "https://employeemanagement-3e150.firebaseio.com",
    storageBucket: "",
    messagingSenderId: "328985142784"
};


const appRoutes :Routes=[
  {path:'',component: DashboardComponent },
  {path:'register',component: RegisterComponent},
  {path:'login',component:  LoginComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EmployeeInfoComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
    NavbarComponent,
    SidebarComponent,
    LoginComponent,
    RegisterComponent,
    SettingsComponent,
    PageNotFoundComponent,
    EmployeesComponent,
    // EmployeesComponent
  ],
  imports: [
    BrowserModule,
    AngularFireAuthModule,

    // AngularFireModule.initializeApp(firebaseConfig),
    
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule

  ],
  providers: [
    AngularFireAuth,
    AngularFireDatabase,
    EmployeeService,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
