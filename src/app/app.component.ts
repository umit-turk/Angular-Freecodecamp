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
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';
import { Dependecy1 } from './dependecyInjection1/depencey1service';
import { dependecyServiceIT } from './InjectionToken';

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
    private initService:InitService,
    private router:Router,
    @Inject(dependecyServiceIT)private dependencyService:Dependecy1,
    @Inject("example") value:string,
    @Inject("umit") func:any,
    @Inject("dependecyService") private dependecyUseService:Dependecy1
  ) {
    // console.log(initService.config,"init");
    console.log(value)
    console.log(func())
    console.log(dependecyUseService.getProducts());
    
  }
  ngOnInit(): void {
    // this.router.events.subscribe((event) => {
    //   console.log(event);
    // })
    this.router.events.pipe(
      filter((event) => event instanceof NavigationStart)
    ).subscribe((event) => {
    })
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    ).subscribe((event) => {
    })
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // console.log(this.name.nativeElement.innerText = "Umit Yasar Turk");
    this.loggerService?.Log('hello');
    this.localStorage.setItem('name',"hilton hotel")
    console.log(this.dependencyService.getProducts())
  }
}
