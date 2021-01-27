import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../Customer';
import { RestapiService } from '../restapi.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  
  customer: Customer= new Customer(0,"","","","","","");
  message:any;

  constructor(private service:RestapiService, private router:Router) { }

  ngOnInit(): void {
  }

  public insertCus(){

    let response = this.service.insertCustomer(this.customer)
    response.subscribe((data)=>this.message=data);
    this.router.navigate(["/form2"])
  }

}
