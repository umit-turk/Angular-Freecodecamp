import { Component } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent {
  hotelName: string = 'Hilton Hotel';
  numberOfRooms: number = 10;
  hideRooms: boolean = false;
  selectedRoom!:RoomList
  rooms: Room = {
    availableRooms: 10,
    bookedRooms: 5,
    totalRooms: 20,
  };

  roomList: RoomList[] = []

  constructor() {}

  ngOnInit(): void {
    this.roomList = [
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
  }
  toggle() {
    this.hideRooms = !this.hideRooms;
  }
  selectRoom(room:RoomList){
    this.selectedRoom = room
  }
}
