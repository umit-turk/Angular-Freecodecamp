import {
  Component,
  ElementRef,
  Inject,
  Optional,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import { LoggerService } from './logger.service';
import { LocalStorageToken } from './localstorage.token';
import { InitService } from './init.service';
import { ConfigService } from './services/config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'freecodecamp';

  role = 'User';
  @ViewChild('user', { read: ViewContainerRef }) vcr!: ViewContainerRef;
  @ViewChild('name', { static: true }) name!: ElementRef;

  constructor(
    @Optional() private loggerService: LoggerService,
    @Inject(LocalStorageToken) private localStorage: any,
    private configService:ConfigService,
    private initService:InitService
  ) {
    // console.log(initService.config,"init");
    
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // console.log(this.name.nativeElement.innerText = "Umit Yasar Turk");
    this.loggerService?.Log('hello');
    this.localStorage.setItem('name',"hilton hotel")
  }
}
