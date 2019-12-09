import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css']
})
export class PromiseComponent implements OnInit {

  constructor() {
   
     this.stopPromise().then(t => console.log('se resolvio la promesa',t))
    .catch(error => console.log(error, 'erros')); 
  }

  ngOnInit() {
  }


  stopPromise(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      let count = 0;
      let interval = setInterval(() => {
        count += 1;
        if (count === 3) {
          resolve(true);
          clearInterval(interval);
        }
      }, 1000);
    });
  }
}

