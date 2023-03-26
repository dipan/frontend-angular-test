import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keyValueList',
})
export class KeyValueListPipe implements PipeTransform {
  transform(value: any, ...args: unknown[]): any {
    let keys = [];
    for (let key in value) {
      keys.push({ key: key, value: value[key] });
    }
    return keys;
  }
}
