import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-search',
  templateUrl: './employee-search.component.html',
  styleUrls: ['./employee-search.component.css']
})
export class EmployeeSearchComponent implements OnInit {

  employee: Employee = new Employee();
  titulo: string = "Registro de estudiantes";

  constructor(private employeeService: EmployeeService, private router: Router, private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    console.log("Ejecutando metodo...ngOnInit from-estudiente", this.employee)
    //this.cargar();
  }
}
