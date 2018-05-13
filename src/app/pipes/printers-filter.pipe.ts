import { Pipe, PipeTransform } from '@angular/core'
import { Printer } from '../types'

@Pipe({ name: 'printersFilter' })
export class PrintersFilterPipe implements PipeTransform {
    transform(stops: Printer[], searchText: any): any {
        if (searchText == null || !stops) {
            return stops
        }
        return stops.filter((stop) => {
            return (
                stop.name
                    .toLowerCase()
                    .trim()
                    .indexOf(searchText.toLowerCase().trim()) > -1
            )
        })
    }
}
