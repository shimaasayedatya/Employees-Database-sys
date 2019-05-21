import { Employee } from '../Employee';
import { FirebaseListObservable, FirebaseObjectObservable, AngularFireDatabase } from 'angularfire2/database-deprecated';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';




@Injectable()
export class EmployeeService {

  employees: FirebaseListObservable<any[]>;
  Employee: FirebaseObjectObservable<any>;

  constructor(public af:AngularFireDatabase) {
    this.employees = this.af.list('/employees') as FirebaseListObservable<Employee[]>;
   }

   getEmployees(){
     return this.employees;
   }

}
