import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-rooms-booking',
  templateUrl: './rooms-booking.component.html',
  styleUrls: ['./rooms-booking.component.scss'],
})
export class RoomsBookingComponent {
  constructor(private router: ActivatedRoute) {}
  roomId: any;
  id$ = this.router.paramMap.pipe(map((params) => params.get('roomid')))
  ngOnInit(): void {
    // this.roomId = this.router.snapshot.params['roomid']
    // this.router.params.subscribe((params) => {
    //   this.roomId = params['roomid'];
    // });
    // this.router.paramMap.subscribe((params) => {params.get('roomid');})
  }
}
