import { InitService } from './init.service';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { EmployeeComponent } from './employee/employee.component';
import { APP_CONFIG, APP_SERVICE_CONFIG } from './AppConfig/appconfig.service';
import { RequestInterceptor } from './request.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppNavComponent } from './app-nav/app-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import { CustomPipe } from 'src/pipes/custom.pipe';
import { LoginComponent } from './login/login.component';
import { HoverDirective } from './directives/hover.directive';
import { EmailvalidatorDirective } from './emailvalidator/emailvalidator.directive';
import { RoomsModule } from './rooms/rooms.module';
import { HeaderModule } from './header/header.module';
import { CommunicationComponent } from './communication/communication.component';
import { ChildCommunicationComponent } from './communication/child-communication/child-communication.component';
import { SecondChildComponent } from './communication/second-child/second-child.component';
import { ExampleComponent } from './example/example.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { RouteConfigToken } from './services/routeConfig.service';
import { ROUTES } from '@angular/router';
function initFactory(initService: InitService) {
  return () => initService.init();
}

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    EmployeeComponent,
    AppNavComponent,
    NotFoundComponent,
    CustomPipe,
    LoginComponent,
    HoverDirective,
    EmailvalidatorDirective,
    CommunicationComponent,
    ChildCommunicationComponent,
    SecondChildComponent,
    ExampleComponent,
    LifecycleComponent
  ],
  imports: [
    BrowserModule,
    RoomsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    HeaderModule
  ],
  providers: [
    {
      provide: APP_SERVICE_CONFIG,
      useValue: APP_CONFIG,
    },
    {
      provide:RouteConfigToken,
      useValue:{title:'Home'},
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true,
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initFactory,
      deps: [InitService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
