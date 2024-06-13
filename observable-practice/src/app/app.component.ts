import { Component } from '@angular/core';
import { Observable, of, from, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'observable-practice';

  arr : number[] = [1,2,3,4,5]
  // myobservable = new Observable((observer)=>{
  //   observer.next(5);
  //   observer.next(5);
  //   observer.next(5);
  //   observer.complete();
  // })

  // myobservable = of(5,10,5);

  myobservable = from([3,4,5]);

  // transformedObs = this.myobservable.pipe(map((val)=>{
  //   return val*2;
  // }));

  ngOnInit(){
    this.myobservable.subscribe({
      next : value => console.log(value),
      error : err => console.log(err),
      complete : () => console.log("observable completed...")
    })
  }

}