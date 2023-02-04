import { Component } from '@angular/core';
import { RoomList } from '../rooms';
import { RoomsService } from '../services/rooms.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-rooms-add',
  templateUrl: './rooms-add.component.html',
  styleUrls: ['./rooms-add.component.scss']
})
export class RoomsAddComponent {

  room: RoomList = {
    roomType: '',
    amenities:'',
    checkinTime: new Date(),
    checkoutTime: new Date(),
    photos:'',
    rating:0,
    price:0
  }
  successMessage:string='';
  constructor(private rooomsService:RoomsService){}

  AddRoom(form:NgForm){
    console.log(form);
    
    this.rooomsService.roomList.push(this.room)
    this.successMessage = "Room Added";
    form.reset()

  }

}
