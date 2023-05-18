import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Customer } from '../customer';
import { LoggerService } from '../logger.service';
 
@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss']
})
export class CustomerDetailComponent implements OnInit {
  employees:any = []
  newEmp='';
  color='';

 //now check out how the services work.

 
  constructor(private logger:LoggerService) { 
    console.log("LoggerService instance created customer-detail");
    this.color=this.logger.color;
    
  }
 
  ngOnInit() {
    console.log("ngOninit called customer-detail")
    this.logger.log("Hi Tinki, service success.")
  }
  OnInputChange(){
    this.logger.OnColorChange(this.color);
  }
   
  addEmployee(){
    
    this.logger.onEmpchange(this.newEmp);
    
    this.newEmp='';
  }
}