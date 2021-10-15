import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calculateItemNo',
})
export class calculateItemNoPipe implements PipeTransform {
  transform(value: number, searchCache: any) {
    const page = searchCache.page - 1;
    const size = searchCache.limit;
    value = value + 1;
    const item_no = page * size + value;
    return isNaN(item_no) ? value : item_no;
  }
}
