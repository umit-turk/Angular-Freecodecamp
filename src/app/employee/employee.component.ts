import { AfterContentInit, Component, ContentChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit, AfterContentInit {
  empName:string = "John";

  constructor(){}

  ngOnInit(): void {
    
  }
  ngAfterContentInit(): void {
   
  }
}
