import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-comp',
  templateUrl: './new-comp.component.html',
  styleUrls: ['./new-comp.component.scss']
})
export class NewCompComponent implements OnInit {
  newcomponent = "Entered in new component created";
  months = ["January", "February", "March", "April", "May", "June", "July", 
  "August", "September", "October", "November", "December"];

  isAvailable = true;
  constructor() { }

  ngOnInit() {
  }
  myClickFunction(event){
    this.isAvailable = !this.isAvailable;
  }
changeMonth(event){
  alert("Changed month from the Dropdown");  
  }
}
