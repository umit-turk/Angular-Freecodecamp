import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.scss']
})
export class LifecycleComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked , OnDestroy{

  @Input() data?:string

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    //Componentin input değişkebi selector referansı üzerinden değiştiği durumlarda
    console.log("first onchanges");
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    //Component ilk olusturuldugunda tetikleniyor.
    console.log("oninit")
  }
  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    //angular componentinin güncellenmesi durumunda bu metodu tetiklemektedir
    //componentteki update edilen bütün herşeyi kapsar
    //docheck aftercontentcheck i kapsar
    console.log("docheck");
  }
  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    //component içeriği ilk kez oluştuğunda tetiklenir.
    //<ng-content #name></ng-content> tamamlandıysa bu metot o zaman tetiklenir.
    console.log("ngAfterContentInit");
  }
  ngAfterContentChecked(): void {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
    //Componentin içeriği güncellendiğinde tetiklenir.
    //sadece içerik update edilme durumunu kapsar
    console.log("ngAfterContentChecked");
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    //Componentin view'ı ilk kez oluşturulduğunda tetiklenir
    //tamamıyla templete ilk kez oluşturulduğunda tetiklenir
    console.log("ngAfterViewInit");
  }
  ngAfterViewChecked(): void {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    //Component'ın viewı guncellendiğinde tetiklenir.
    console.log("ngAfterViewChecked");
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    //Component'in silinmesi durumunda tetiklenir.
    console.log("ngOnDestroy");
    
  }

}
