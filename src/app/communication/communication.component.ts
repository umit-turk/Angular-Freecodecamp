import { Component } from '@angular/core';

@Component({
  selector: 'app-communication',
  templateUrl: './communication.component.html',
  styleUrls: ['./communication.component.scss'],
})
export class CommunicationComponent {
  data: string = 'parent to child';
  child?:string;
  secondChild?:string
  childEvent(event:any){
    console.log(event);
    this.child = event.message
  }

  second(event:any){
    console.log(event);
    this.secondChild = event.message;
  }
  
}
