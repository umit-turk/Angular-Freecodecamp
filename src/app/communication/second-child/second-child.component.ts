import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-second-child',
  templateUrl: './second-child.component.html',
  styleUrls: ['./second-child.component.scss']
})
export class SecondChildComponent implements OnInit {
@Output() secondChild: EventEmitter<any> = new EventEmitter();

constructor(){}
ngOnInit(): void {
  this.secondChild.emit({message:"Comes from second child"})
}
}
