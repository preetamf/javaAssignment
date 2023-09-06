import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/Customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {

  customer?:Customer
  data:any

  constructor(private customerService:CustomerService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {

    let id = this.route.snapshot.params['id'];
    this.customerService.getCustomerById(id).subscribe(data=>{
      this.customer = data
      console.log(this.customer);
    })
  }

  form = new FormGroup({
    firstName:new FormControl('',[Validators.required]),
    lastName:new FormControl('',[Validators.required]),
    street:new FormControl('',[Validators.required]),
    address:new FormControl('',[Validators.required]),
    city:new FormControl('',[Validators.required]),
    state:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required]),
    phone:new FormControl('',[Validators.required]),
  })

  submit(){
    this.data= this.form.value
    console.log(this.data)

    this.customerService.updateCustomer(this.customer?.id,this.data).subscribe(data=>{
      console.log(data)
    })
    this.router.navigate(['/']);
  }

}
