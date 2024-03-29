import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { capitalLetterValidator } from './validators/func';
import { Dependecy1 } from '../dependecyInjection1/depencey1service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent implements OnInit {
  bookingForm: FormGroup;

  constructor(private formBuilder:FormBuilder, private productService: Dependecy1) {
    this.bookingForm = formBuilder.group({
      name: ["",[ Validators.required, Validators.minLength(3), capitalLetterValidator(3)]],
      surname: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      tel: [""],
      address: formBuilder.group({
        country:[""],
        city:[""],
        street:[""],
      })
    })
  }

  get name() {
    return this.bookingForm.get("name")
  }
  get surname() {
    return this.bookingForm.get("surname")
  }
  get email() {
    return this.bookingForm.get("email")
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
   this.productService.getProducts().map((res) => {
    console.log(res)
   })
  }

  onSubmit(){
    console.log(this.bookingForm.value);
  }
  send(){
  }
}


