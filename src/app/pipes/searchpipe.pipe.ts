import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchpipe'
})
export class SearchpipePipe implements PipeTransform {

  transform(value: any, city: string): any {
    console.log(value)
    console.log(city)
    if (!city) {
      return value
    }
    // value=value.filter((el:string)=> el.includes(city))
    value = value.filter((el: string) => el.toLowerCase().includes(city.toLowerCase()))
    return value

  }

}
