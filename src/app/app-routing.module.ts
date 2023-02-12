import { RoomsModule } from './rooms/rooms.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { CommunicationComponent } from './communication/communication.component';
import { ExampleComponent } from './example/example.component';

const routes: Routes = [
  {
    path: 'employee',
    component: EmployeeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path:'communucation',
    component:CommunicationComponent
  },
  {
    path:'example',
    component:ExampleComponent
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path:'rooms',
    loadChildren:() => import('./rooms/rooms.module').then((m) => m.RoomsModule),
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
