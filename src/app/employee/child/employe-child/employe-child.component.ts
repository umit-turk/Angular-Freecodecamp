import { Component, Optional, Self, SkipSelf } from '@angular/core';
import { RandomserviceService } from 'src/app/services/randomservice.service';

@Component({
  selector: 'app-employe-child',
  templateUrl: './employe-child.component.html',
  styleUrls: ['./employe-child.component.scss'],
  providers:[RandomserviceService]
})
export class EmployeChildComponent {
  //@Self() dekoratörü, bu yapılandırıcıya enjekte edilecek olan servis veya başka bir bağımlılığın, sadece yerel injector'da aranması gerektiğini belirtir. Bu, bu bileşen veya direktifin üstündeki herhangi bir üst bileşen veya direktiften gelen servislerin kullanılmaması anlamına gelir.
  //@SkipSelf() davranışı anguların default olarak benimsediği bir davranıştır.@SkipSelf() dekoratörü, bu yapılandırıcıya enjekte edilecek olan servis veya başka bir bağımlılığın, kendisinden önceki en yakın üst bileşen veya direktifin injector'unda aranması gerektiğini belirtir. Bu, bu bileşen veya direktifin kendi injector'undan önce, üst bileşen veya direktiflerin injector'larında arama yapmasını sağlar.
  //@Optional() dekoratörü, bu yapılandırıcıya enjekte edilecek olan servis veya başka bir bağımlılığın, olmayabileceğini belirtir. Bu, uygulama veya modül düzeyindeki injector'da, enjekte edilecek servisin olmayabileceği anlamına gelir.
  constructor(@Optional() @Self() private randomService:RandomserviceService){
    console.log(randomService,"child")
  }
}
