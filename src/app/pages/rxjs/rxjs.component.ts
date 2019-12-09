import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';


@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {
  subscription : Subscription;
  constructor() {

   this.subscription =  this.returnObservable().pipe( map(resp => {
     return resp.valor
     
    }),
    filter((valor, index)=> {
      if(valor % 2 ===0){
        return true;
      } else {
        return false;
      }
    })). subscribe
      (any => console.log('numero', any),
        error => console.log('Hay un error', error),
        () => console.log('Termino')
      )
  }

  ngOnInit() {
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  returnObservable(): Observable<any> {
    return new Observable((observer: Subscriber<any>) => {
      let count = 0;
      let interval = setInterval(() => {
        count++;
        const salida = {
          valor: count
        }
        observer.next(salida);
        /* if (count === 3) {
          clearInterval(interval);
          observer.complete();
        } */
       
      }, 1000);

    });
    
  }

}
