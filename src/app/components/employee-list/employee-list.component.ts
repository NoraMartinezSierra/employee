import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  
  titulo: string = "Lista de Empleados";


  employees:Employee[];

  constructor(private employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.getAllEmpoyes().subscribe(
      e => this.employees=e
    );
  }

  

}
