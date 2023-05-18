
import { Component, OnInit , OnDestroy} from '@angular/core';
import { Customer } from '../customer';
// import { element } from 'protractor';
import { ObjectUnsubscribedError } from 'rxjs';
import { LoggerService } from '../logger.service';
 
@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
 
  color='';
  employees:any = []
  newEmp='';
  
 
  constructor(private logger:LoggerService) { 
    console.log("constructor called customer-list")
    this.color=this.logger.color;
    // this.employees=this.logger.employees;
    this.employees=this.logger.getEmployees();
  }
 
  ngOnInit() {
    console.log("ngoninit called customer-detail")
  }

  onInputChange(){
    this.logger.OnColorChange(this.color);
  }
 
 ngOnDestroy(){
  console.log("ngOnDestroy called customer-detail")
 }
 
}