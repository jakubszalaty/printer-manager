import { Component, ChangeDetectionStrategy } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { Printer } from '../types'
import { PrintersService } from '../services/printers/printers.service'
import { environment } from '../../environments/environment'
import { MatSnackBar } from '@angular/material'

@Component({
    selector: 'app-printer-list',
    templateUrl: './printer-list.component.html',
    styleUrls: ['./printer-list.component.css'],
    // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrinterListComponent {
    printerList$: Observable<Printer[]>

    orderColumn = 'id'

    searchText = ''

    constructor(private printersService: PrintersService, private snackBar: MatSnackBar) {
        this.printerList$ = printersService.printerList$

        // this.printersService.loadItems()
    }

    createNewPrinter() {
        this.printersService.createNewPrinter()
        this.snackBar.open('Printer created', '', { duration: 1000 })
    }

    deletePrinter(item: Printer) {
        this.printersService.deletePrinter(item)
        this.snackBar.open('Printer deleted', '', { duration: 1000 })
    }

    getReportUrl() {
        return `${environment.serverUri}/report.txt`
    }

    changeOrder($event) {
        this.orderColumn = $event.checked ? 'name' : 'id'
    }
    clearSearchText() {
        this.searchText = ''
    }
}
