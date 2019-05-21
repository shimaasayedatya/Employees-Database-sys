import { Employee } from '../../Employee';
import { Component, OnInit } from '@angular/core';
import { EmployeeService} from '../../services/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {


employees : Employee[]; 

  constructor( public employeeService : EmployeeService) { 

  }

  ngOnInit() {
    this.employeeService.getEmployees().subscribe(employees =>{
      this.employees =employees;
      console.log(this.employees);
    });
  }

}
