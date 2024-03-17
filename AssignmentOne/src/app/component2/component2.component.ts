import { Component } from '@angular/core';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component {
  inputValue: string = '';
  isButtonDisabled: boolean = true;

  onInputChange() {
    this.isButtonDisabled = this.inputValue.trim() === '';
  }

  resetInput() {
    this.inputValue = '';
    this.isButtonDisabled = true;
  }
}