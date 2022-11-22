import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

    // this enable reading and reusability of code thus; of the color and text as input from button
    @Input() text!: string;
    @Input() color!: string;
    @Output() btnClick =new EventEmitter();
  
  
    constructor() { }
  
    ngOnInit(): void {}
      //setting the button to emit to header component
      onClick(){
        this.btnClick.emit();//for reusability 
      }
}
