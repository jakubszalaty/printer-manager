import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { Printer } from '../types'

@Component({
    selector: 'app-printer-list',
    templateUrl: './printer-list.component.html',
    styleUrls: ['./printer-list.component.css'],
})
export class PrinterListComponent implements OnInit {
    constructor() {}
    printerList: Observable<Printer[]>
    ngOnInit() {}
}
