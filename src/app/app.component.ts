import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'InputOutputExample';
  selectedDesignation = 'All';

  employees = [
    {
      firstname: 'Tiger Nixon',
      designation: 'System Architect',
      place: 'Edinburgh',
      pin: '5421',
    },
    {
      firstname: 'Garrett Winters',
      designation: 'System engineer',
      place: 'Edinburgh',
      pin: '5421',
    },
    {
      firstname: 'Ashton Cox',
      designation: 'System Architect',
      place: 'Edinburgh',
      pin: '5421',
    },
    {
      firstname: 'Cedric Kelly',
      designation: 'System engineer',
      place: 'Edinburgh',
      pin: '5421',
    },
    {
      firstname: 'Airi Satou',
      designation: 'System engineer',
      place: 'Edinburgh',
      pin: '5421',
    },
  ];

  countAllEmp() {
    return this.employees.length;
  }
  countEngEmp() {
    return this.employees.filter((x) => x.designation === 'System engineer')
      .length;
  }
  countArchEng() {
    return this.employees.filter((x) => x.designation === 'System Architect')
      .length;
  }
  radioButtonChange(data: string) {
    this.selectedDesignation = data;
    console.log(data);
  }
}
