import { Component } from '@angular/core';
import {StudentService} from './student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  // marks! :number;
  // totalMarks! :number;

  // constructor(private studentService : StudentService){ }

  // ngOnInit() :void{
  //   this.marks = this.studentService.marks;
  //   this.totalMarks = this.studentService.totalMarks;
  // }

  data!: Promise<string>;

  ngOnInit() {
    this.data = new Promise(resolve => {
      setTimeout(() => {
        resolve('Hello, Angular!');
        console.log("promise resolved...");
      }, 5000); 
    });
  }
}
