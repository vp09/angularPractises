import { Component ,Input, Output, EventEmitter,OnInit, OnChanges} from '@angular/core';

@Component({
  selector: 'app-compcom',
  templateUrl: './compcom.component.html',
  styleUrls: ['./compcom.component.scss']
})
export class CompcomComponent implements OnInit{
  @Input() All:number = 0;
  @Input() sysEng:number = 0;
  @Input() sysArch:number = 0;

 
  @Output() radioButtonChanged = new EventEmitter<string>();

  selectedOption='All';
  
  // total: number | undefined;

 ngOnInit(): void {
  //  console.log("sel option :", this.selOp);
 }
ngOnChanges():void{
  // console.log("sel option changed :", this.selOp);
  
}
sendDataToParent(){
  this.radioButtonChanged.emit(this.selectedOption);
}

}
