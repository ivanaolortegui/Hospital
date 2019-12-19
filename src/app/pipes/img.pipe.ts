import { Pipe, PipeTransform } from '@angular/core';
import { _URLSERVICES } from '../config/config';

@Pipe({
  name: 'img'
})
export class ImgPipe implements PipeTransform {

  transform(img: any, type: string ='usuario'): any {
    let url = _URLSERVICES + '/img';
    if( !img ) {
      return url + 'users/xx';
    }
    if(img.indexOf('https') >= 0 ) {
      return img;
    }

    switch( type ) {
      case 'user':
        url += '/users/'+ img;
        break;
        case 'medico':
        url += '/medicos/'+ img;
        break;
        case 'hospital':
        url += '/hospitals/'+ img;
        break;
        default:
          console.log('tipo de imagen no existe, usuario, medicos');
          url += '/users/xxx'
        
    }
    return url;
  }

}
