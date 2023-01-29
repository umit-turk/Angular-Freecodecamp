import { AfterContentInit, Component, ContentChild, OnInit } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit, AfterContentInit {
  @ContentChild(EmployeeComponent) employee!: EmployeeComponent

  constructor(){}

  ngAfterContentInit(): void {
    console.log('Component content has been initialized.');
    console.log(this.employee)
    this.employee.empName = "Umit"
  }

  ngOnInit(): void {
    
  }

}
