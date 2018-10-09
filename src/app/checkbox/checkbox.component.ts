import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {
  name = 'Angular 6';
  marked = false;
  theCheckbox = false;

  constructor() {
  }

  toggleVisibility(e) {
    this.marked = e.target.checked;
  }
  ngOnInit() {
  }


}
