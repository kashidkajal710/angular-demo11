import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myLowerCase'
})
export class MyLowerCasePipe implements PipeTransform {

  transform(value: any, gender: any): any {
    // console.log("manisha kadam athish thopte"+ value)
    // return value.toLowerCase();

    console.log(value);
    console.log(gender)
    if(gender=='male'){
      return("mr. "+value)
    }else{
      return('miss. '+value)
    }
  }

}
