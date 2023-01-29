import { ChangeDetectionStrategy, Component, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Room, RoomList } from './rooms';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
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
  title="Room List"

  roomList: RoomList[] = []
  @ViewChild(HeaderComponent) headerComponent!:HeaderComponent;
  @ViewChildren(HeaderComponent) headerChildrenComponent!:QueryList<HeaderComponent>;

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
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.headerComponent.title = "Rooms View";
  this.headerChildrenComponent.last.title = "Last Title";
  }

  ngAfterViewChecked(): void {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    
  }
  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = "Rooms List";
  }
  selectRoom(room:RoomList){
    this.selectedRoom = room
  }
  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
  }
 
  addRoom(){
    const room:RoomList = {
      roomNumber:4,
      roomType:"Normal Room",
      amenities:"lorem ipsum",
      price:300,
      checkinTime: new Date('11-Nov-2011'),
      checkoutTime: new Date('12-Nov-2021'),
      rating:4.5,
      photos: 'https://picsum.photos/200/300',
    }
    this.roomList = [...this.roomList, room]
  }


}
