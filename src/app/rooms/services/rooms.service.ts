import { Injectable } from '@angular/core';
import { RoomList } from '../rooms';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {
    roomList: RoomList[] = [
    {
      roomType: 'Deluxe Room',
      amenities: 'Air Conditior',
      price: 500,
      checkinTime: new Date('11-Nov-2021'),
      photos: 'https://picsum.photos/200/300',
      checkoutTime: new Date('12-Nov-2021'),
      roomNumber:1,
      rating:4.5234,
    },
    {
      roomType: 'Poor Room',
      amenities: 'Air Conditior',
      price: 1500,
      checkinTime: new Date('13-Nov-2021'),
      photos: 'https://picsum.photos/200/300',
      checkoutTime: new Date('16-Nov-2021'),
      roomNumber:2,
      rating:443543543543,

    },
    {
      roomType: 'King Room',
      amenities: 'Air Conditior',
      price: 1200,
      checkinTime: new Date('17-Nov-2021'),
      photos: 'https://picsum.photos/200/300',
      checkoutTime: new Date('20-Nov-2021'),
      roomNumber:3,
      rating:3.5321321,
    },
  ];
  constructor() { 
    console.log("Rooms service initialized");
    
  }

  getRooms(){
    return this.roomList;
  }
}
