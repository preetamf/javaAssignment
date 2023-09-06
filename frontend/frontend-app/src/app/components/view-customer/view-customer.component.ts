import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.css']
})
export class ViewCustomerComponent implements OnInit {

  customers:any[] | undefined
  url: string = "http://localhost:8080/"

  constructor(private customerService:CustomerService,private router:Router) { }

  ngOnInit(): void {
    this.customerService.getCustomer().subscribe(data=>{
      this.customers = data;
    })
  }
  deleteCustomer(id: number){
    this.customerService.deleteCustomer(id).subscribe(data => {
      this.customers = this.customers?.filter(cutomer => cutomer.id !== id);
    })
    
      setTimeout(()=>{
        window.location.reload();
      }, 100);
  
  }

  updateCustomer(id:number){
    this.router.navigate(['update',id]);
  }

}
