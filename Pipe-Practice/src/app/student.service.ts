import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class StudentService {

  constructor() { }

  marks : number = 710;
  totalMarks : number = 720;

}