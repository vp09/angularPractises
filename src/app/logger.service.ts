import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  color:string='';
  private employees:any = []

  constructor() { 
    console.log("LoggerService called in constructor")
  }

  log(message:string){
    console.log("logged message:",message )
  }

  OnColorChange(value:string){
    this.color=value;
  }
  onEmpchange(value:string){
    this.employees.push(value);
  }
  getEmployees(){
    console.log("value of employee array from logger service",this.employees);
    return this.employees;
    
  }
}
/*NOTES:
1. service acts as a class with private members like variables, so that these cannot be accesses or manipulated outside by anyone.
2.  the value of these private var can only be changed in this class. one place only.
3. other classes can access the value only via methods that send the data. these data cant be changed just read.
4. so in customer detail class, just sending thenewly added emp data to this service class and adding it to out private var employees array.
5. then in component customer-list we are calling the getemployee func in order to print the values of the array employees on the screen.
*/
