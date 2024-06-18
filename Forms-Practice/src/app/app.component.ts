import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  myForm! : FormGroup;

  constructor(private fb : FormBuilder){}

  ngOnInit(){
    this.myForm = this.fb.group({
      personalDetails : this.fb.group({
        name : ['', Validators.required],
        email : ['', Validators.required],
        age : ['', Validators.required]
      }),
      gender : [''],
      hobbies : this.fb.array([ 
        this.fb.control(''),
        this.fb.control('')
      ])
    })
  }

  get hobbies(){
    return this.myForm.get('hobbies') as FormArray;
  }

  onSubmit(){
    console.log(this.myForm);
  }
}
  