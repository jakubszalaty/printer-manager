import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { ActivatedRoute } from '@angular/router'
import { PrintersService } from '../services/printers/printers.service'
import 'rxjs/add/operator/map'
import { Printer } from '../types'
import { switchMap } from 'rxjs/operators'

@Component({
    selector: 'app-printer-view',
    templateUrl: './printer-view.component.html',
    styleUrls: ['./printer-view.component.css'],
})
export class PrinterViewComponent implements OnInit {
    id$: Observable<number>
    printer$: Observable<Printer>

    constructor(private route: ActivatedRoute, private printersService: PrintersService) {}

    ngOnInit() {
        this.id$ = this.route.paramMap.map((params) => {
            return Number(params.get('id'))
        })

        this.printer$ = this.id$.pipe(switchMap((v) => this.printersService.getPrinter(v)))
    }
}
