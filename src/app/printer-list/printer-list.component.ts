import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { Store, select } from '@ngrx/store'
import { Printer, AppState } from '../types'
import * as PrintersActions from '../stores/printers/printers.actions'
@Component({
    selector: 'app-printer-list',
    templateUrl: './printer-list.component.html',
    styleUrls: ['./printer-list.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrinterListComponent implements OnInit {
    printerList$: Observable<Printer[]>
    constructor(private store: Store<AppState>) {
        this.printerList$ = store.pipe(select('printers'))
    }
    ngOnInit() {
        const items: Printer[] = [
            { id: 1, name: 'Canon', description: 'Nice printer' },
            { id: 2, name: 'HP', description: 'Better printer' },
        ]
        this.store.dispatch(new PrintersActions.Add(items))
    }
}
