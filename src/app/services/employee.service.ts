import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private url:string = "http://localhost:5000/api/employee"

  constructor(private http:HttpClient) { }
    
    //obtener empleados
    getAllEmpoyes  ():Observable<Employee[]>{
    return this.http.get<Employee[]>(this.url+'s');
  }

  //obtener un estudiante
  getEmployeeById(id:number):Observable<Employee>{
    return this.http.get<Employee>(this.url+'/'+id);
  }
}