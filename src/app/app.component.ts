import { Component, VERSION } from '@angular/core';
import {
  Validators,
  FormBuilder,
  FormControl,
  FormGroup
} from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public fb: FormBuilder) {
    this.codeForm = this.fb.group({
      code: new FormControl(null, Validators.required)
    });
  }

  public codeForm: FormGroup;
  // memberModel: Member;
  memberForm: FormGroup;
  cntlLetters = 'study'
  cntlNum = '9289'
  xrtlLetters = 'breath'
  xtrlNum = '1298'
  name = 'Angular ' + VERSION.major;
  values;
  message = '';
  link = '';
  submitted = false;
  group = 'none';

  onSubmit() {
    const values = this.codeForm.value;
    console.log(values);
    this.submitted = true;

    if (values.code === `${this.cntlLetters}${this.cntlNum}`) {
      // cntl
      this.group = 'cntl';
      this.link = '';
      this.message = '';
    } else if (values.code === `${this.xtrlNum}${this.xrtlLetters}`) {
      // exrtl
      this.group = 'xrtl';
      this.link = '';
      this.message = '';
    } else {
      this.group = 'none';
      this.link = '';
      this.message = '';
    }
  }
}
// https://stackblitz.com/edit/angular-ivy-uakspq?file=src/app/app.component.ts
