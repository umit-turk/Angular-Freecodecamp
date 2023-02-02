import { ChangeDetectionStrategy, Component, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Room, RoomList } from './rooms';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './services/rooms.service';
import { Observable } from 'rxjs';
import { HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class RoomsComponent {
  hotelName: string = 'Hilton Hotel';
  numberOfRooms: number = 10;
  hideRooms: boolean = true;
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

  constructor(private roomsService:RoomsService) {}

  stream = new Observable(observer => {
    observer.next("user1");
    observer.next("user2");
    observer.next("user3");
    observer.next("user4");
    observer.complete();
    observer.error("error")
  })

  totalBytes = 0;

  ngOnInit(): void {
    this.roomsService.getPhotos().subscribe((data) => {
      switch(data.type){
        case HttpEventType.Sent: {
          console.log('Request has been made!');
          break;
        }
        case HttpEventType.ResponseHeader: {
          console.log('Request success!');
          break;
        }
        case HttpEventType.DownloadProgress: {
          this.totalBytes += data.loaded;
          break;
        }
        case HttpEventType.Response: {
          console.log(data.body);
        }
      }
      
    })
   this.roomList = this.roomsService.getRooms()
   this.stream.subscribe({
    next: (value) => console.log(value),
    complete: () => console.log("complete"),
    error: (err) => console.log(err)
   })
   this.stream.subscribe((res) => {
    console.log(res)
   })
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
