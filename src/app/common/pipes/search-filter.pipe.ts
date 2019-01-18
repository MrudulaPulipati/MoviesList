import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'mytitlefilter',
    pure: false
})
export class MyFilterPipe implements PipeTransform {
    transform(items: any[], filter: any): any {
        if (!items || !filter) {
            return items;
        }
        // filter items array, items which match and return true will be
        // kept, false will be filtered out
        return items.filter(item => (item.Title.toLowerCase()).indexOf(filter.Title.toLowerCase()) !== -1);
    }
}
