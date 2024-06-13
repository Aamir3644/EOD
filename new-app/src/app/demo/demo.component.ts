import { Component, Input, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent {
    @Input() value! : string ;

    constructor(){
      console.log("constructor gets called...");
      // console.log(this.value);
    }

    ngOnChanges(changes : SimpleChange){
      console.log("ngOnChanges gets called...");
      console.log("Input box value : "+this.value);
      console.log(changes);
    }

    ngOnInit(){
      console.log("ngOnInit gets called...");
      // console.log(this.value);
    }
    
    ngDoCheck(){
      console.log("ngDoCheck gets called...");
    }

}