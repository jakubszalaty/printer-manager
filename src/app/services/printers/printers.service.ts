import { Injectable } from '@angular/core'
import { Http, Headers } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import { Store, select } from '@ngrx/store'
import { Printer, AppState } from '../../types'
import { environment } from '../../../environments/environment'
import * as PrintersActions from '../../stores/printers/printers.actions'
import 'rxjs/add/operator/map'

@Injectable()
export class PrintersService {
    printerList$: Observable<Printer[]>
    printerLastId: number

    constructor(private http: Http, private store: Store<AppState>) {
        this.printerList$ = store.pipe(select('printers'))
        this.printerList$.subscribe((v: Printer[]) => {
            this.printerLastId = v.length ? v[v.length - 1].id : -1
        })
        // To load items once
        this.loadItems()
    }

    loadItems() {
        this.http
            .get(`${environment.serverUri}/printers.json`)
            .map((res) => res.json())
            .map((payload) => new PrintersActions.Add(payload))
            .subscribe((action) => this.store.dispatch(action))
    }

    createNewPrinter() {
        const item: Printer = {
            id: this.printerLastId + 1,
            name: 'New printer',
            description: `Printer's description`,
            status: 'offline',
            networkAddress: '0.0.0.0',
            paperCount: 0,
            type: '',
        }
        this.store.dispatch(new PrintersActions.Create(item))
    }

    deletePrinter(item: Printer) {
        this.store.dispatch(new PrintersActions.Delete(item))
    }

    updatePrinter(item: Printer) {
        this.store.dispatch(new PrintersActions.Update(item))
    }

    getPrinter(id: number) {
        return this.printerList$.map((v) => v.find((printer) => printer.id === id))
    }
}
