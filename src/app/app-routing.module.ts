import { RoomsModule } from './rooms/rooms.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { CommunicationComponent } from './communication/communication.component';
import { ExampleComponent } from './example/example.component';
import { LoginGuard } from './guards/login.guard';
import { RoomGuard } from './rooms/guards/room.guard';

const routes: Routes = [
  {
    path: 'employee',
    component: EmployeeComponent,
    // canActivate: [LoginGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'communucation',
    component: CommunicationComponent,
    // canActivate: [LoginGuard],
  },
  {
    path: 'example',
    component: ExampleComponent,
    // canActivate: [LoginGuard],
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'rooms',
    loadChildren: () =>
      import('./rooms/rooms.module').then((m) => m.RoomsModule),
      // canActivate:[LoginGuard],
      // canLoad:[LoginGuard]
  },
  {
    path: 'booking',
    loadChildren: () =>
      import('./booking/booking.module').then((m) => m.BookingModule),
    // canActivate: [LoginGuard],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
