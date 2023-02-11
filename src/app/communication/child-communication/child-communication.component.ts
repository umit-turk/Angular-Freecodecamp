import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-communication',
  templateUrl: './child-communication.component.html',
  styleUrls: ['./child-communication.component.scss']
})
export class ChildCommunicationComponent implements OnInit {
  @Input() parentToChild?:string
  @Output() childToParent = new EventEmitter<any>()

  constructor(){}
  ngOnInit(): void {
  }
  send(){
    this.childToParent.emit({message:'child to parent'})
  }
}
