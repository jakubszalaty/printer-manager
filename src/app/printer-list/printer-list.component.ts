import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { Store, select } from '@ngrx/store'
import { Printer, AppState } from '../types'
import * as PrintersActions from '../stores/printers/printers.actions'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/distinctUntilChanged'
@Component({
    selector: 'app-printer-list',
    templateUrl: './printer-list.component.html',
    styleUrls: ['./printer-list.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrinterListComponent implements OnInit {
    printerList$: Observable<Printer[]>
    printerLastId: number
    constructor(private store: Store<AppState>) {
        this.printerList$ = store.pipe(select('printers'))

        this.printerList$.subscribe((v: Printer[]) => {
            this.printerLastId = v.length ? v[v.length - 1].id : -1
        })
    }

    ngOnInit() {
        const items: Printer[] = [
            { id: 0, name: 'Canon', description: 'Nice printer' },
            { id: 1, name: 'HP', description: 'Better printer' },
        ]
        this.store.dispatch(new PrintersActions.Add(items))
    }

    createNewPrinter() {
        const item: Printer = {
            id: this.printerLastId + 1,
            name: 'New printer',
            description: `Printer's description`,
        }
        this.store.dispatch(new PrintersActions.Create(item))
    }

    deletePrinter(item: Printer) {
        this.store.dispatch(new PrintersActions.Delete(item))
    }
}
