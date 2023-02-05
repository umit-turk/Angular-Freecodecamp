import { Inject, Injectable } from '@angular/core';
import { RoomList } from '../rooms';
import { APP_SERVICE_CONFIG } from 'src/app/AppConfig/appconfig.service';
import { AppConfig } from 'src/app/AppConfig/appconfig.interface';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
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
      roomNumber: 1,
      rating: 4.5234,
    },
    {
      roomType: 'Poor Room',
      amenities: 'Air Conditior',
      price: 1500,
      checkinTime: new Date('13-Nov-2021'),
      photos: 'https://picsum.photos/200/300',
      checkoutTime: new Date('16-Nov-2021'),
      roomNumber: 2,
      rating: 443543543543,
    },
    {
      roomType: 'King Room',
      amenities: 'Air Conditior',
      price: 1200,
      checkinTime: new Date('17-Nov-2021'),
      photos: 'https://picsum.photos/200/300',
      checkoutTime: new Date('20-Nov-2021'),
      roomNumber: 3,
      rating: 3.5321321,
    },
  ];
  constructor(
    @Inject(APP_SERVICE_CONFIG) private config: AppConfig,
    private http: HttpClient
  ) {
    // console.log(this.config.apiEndpoint);
    // console.log('Rooms service initialized');
  }

  getRooms() {
    return this.roomList;
  }

  getPhotos() {
    const request:any = new HttpRequest(
      'GET',
      'https://jsonplaceholder.typicode.com/photos',
      {
        reportProgress: true,
      }
    );
    return this.http.request(request);
  }

  getUsers(){
    // const headers = new HttpHeaders({'token':'12345fwefew'})
    return this.http.get("https://jsonplaceholder.typicode.com/users",)
  }
}
