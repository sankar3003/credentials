import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';
import { nameValidation } from '../validators/custom.validators';
import { Testcase1Component } from '../testcase1/testcase1.component';
import { UsernameValidator } from '../validators/username.validators';
import { FromEventTarget } from 'rxjs/internal/observable/fromEvent';



@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  form:FormGroup
  ngOnInit(): void {
    
  }
constructor(fb:FormBuilder){
  this.form=new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3), UsernameValidator.cannotContainSpace]),
    password: new FormControl('', Validators.required),
    
  });

  this.form.get
}

 


  get f(){
    return this.form.controls;
  }
    
  submit(){
 
      console.log(this.form)
    }
  validateAllFormFields(formGroup: FormGroup) {         //{1}
  Object.keys(formGroup.controls).forEach(field => {  //{2}
    const control = formGroup.get(field);             //{3}
    if (control instanceof FormControl) {             //{4}
      control.markAsTouched({ onlySelf: true });
    } else if (control instanceof FormGroup) {        //{5}
      this.validateAllFormFields(control);            //{6}
    }
  });
}

}
