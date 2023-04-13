import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CoreService } from '../core/core.service';

@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.css']
})
export class EmpAddEditComponent implements OnInit {

  empForm: FormGroup;

  education: string[] = [
    'High School', 
    'Intermediate',
    'Diploma',
    'Graduate',
    'Post Graduate'
  ]

  constructor(
    private _fb:FormBuilder, 
    private _empService: EmployeeService, 
    private _dialogRef: MatDialogRef<EmpAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private __coreService: CoreService,
    ){
    this.empForm = this._fb.group({
      firstName:'',
      lastName:'',
      email:'',
      dob:'',
      gender:'',
      company:'',
      education:'',
      experence:'',
      package:'',
    })
  }
  ngOnInit(): void {
    this.empForm.patchValue(this.data);
  }

  onFormSubmit(){
    if(this.empForm.valid){
      if (this.data){
        this._empService.updateEmployee(this.data.id, this.empForm.value).subscribe({
          next: (val: any) =>{
            this.__coreService.openSnackBar('Employee Data  Updated');

            this._dialogRef.close(true);
            
          },
          error: (err) => {
            console.error(err);
          }
         });
      }
      else{
        this._empService.addEmployee(this.empForm.value).subscribe({
          next: (val: any) =>{
            this.__coreService.openSnackBar('Employee Added Successfully');
            this._dialogRef.close(true);
            
          },
          error: (err) => {
            console.error(err);
          }
         }); 
      }
       
    }
  }
}
