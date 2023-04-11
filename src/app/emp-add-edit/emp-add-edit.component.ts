import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.css']
})
export class EmpAddEditComponent {

  empForm: FormGroup;

  education: string[] = [
    'High School', 
    'Intermediate',
    'Diploma',
    'Graduate',
    'Post Graduate'
  ]

  constructor(private _fb:FormBuilder){
    this.empForm = this._fb.group({
      firstName:'',
      lastName:'',
      email:'',
      dob:'',
      gender:'',
      education:'',
      experence:'',
      package:'',
    })
  }

  onFormSubmit(){
    if(this.empForm.valid){
      console.log(this.empForm.value);
    }
  }
}
