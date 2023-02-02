import { AfterContentInit, Component, ContentChild, OnInit, Self } from '@angular/core';
import { RoomsService } from '../rooms/services/rooms.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  providers:[RoomsService]
})
export class EmployeeComponent implements OnInit, AfterContentInit {
  empName:string = "John";

  constructor(@Self() private roomsService:RoomsService){}

  ngOnInit(): void {
    
  }
  ngAfterContentInit(): void {
   
  }
}
