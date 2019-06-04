import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(array: Array<any>, key: string, isDesc: boolean = true): any {
    if (!array) {
      // Если не можем преобразовать, то вернуть то, что пришло
      // return;
      return array;
    }

    if (!key) {
      return array;
    }

    const ascending = (a, b) => {
      const aVal = (typeof a[key] === 'string') ? a[key].toLowerCase() : a[key];
      const bVal = (typeof b[key] === 'string') ? b[key].toLowerCase() : b[key];

      if (aVal > bVal) {
        return 1;
      } else if (aVal < bVal) {
        return -1;
      }
      return 0;
    };

    const descending = (a, b) => {
      const aVal = (typeof a[key] === 'string') ? a[key].toLowerCase() : a[key];
      const bVal = (typeof b[key] === 'string') ? b[key].toLowerCase() : b[key];

      if (aVal > bVal) {
        return -1;
      } else if (aVal < bVal) {
        return 1;
      }
      return 0;
    };

    // Хоть и тип параметра Array, а если пришел не массив, то код упадет. Как вариант еще проверить на Array.isArray();
    return array.sort(isDesc ? descending : ascending);
  }

}
