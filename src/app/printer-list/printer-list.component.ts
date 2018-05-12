import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { Printer } from '../types'
import { PrintersService } from '../services/printers/printers.service'
@Component({
    selector: 'app-printer-list',
    templateUrl: './printer-list.component.html',
    styleUrls: ['./printer-list.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrinterListComponent implements OnInit {
    printerList$: Observable<Printer[]>

    constructor(private printersService: PrintersService) {
        this.printerList$ = printersService.printerList$
        this.printersService.loadItems()
    }

    ngOnInit() {}

    createNewPrinter() {
        this.printersService.createNewPrinter()
    }

    deletePrinter(item: Printer) {
        this.printersService.deletePrinter(item)
    }
}
