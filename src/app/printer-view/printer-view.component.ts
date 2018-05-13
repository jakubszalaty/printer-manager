import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { ActivatedRoute } from '@angular/router'
import { PrintersService } from '../services/printers/printers.service'
import 'rxjs/add/operator/map'
import { Printer } from '../types'
import { switchMap } from 'rxjs/operators'
import { FormBuilder, FormGroup } from '@angular/forms'

@Component({
    selector: 'app-printer-view',
    templateUrl: './printer-view.component.html',
    styleUrls: ['./printer-view.component.css'],
})
export class PrinterViewComponent implements OnInit {
    id$: Observable<number>
    printer$: Observable<Printer>
    form: FormGroup
    constructor(
        private route: ActivatedRoute,
        private printersService: PrintersService,
        private fb: FormBuilder
    ) {
        this.form = fb.group({
            id: '',
            name: '',
            status: '',
            networkAddress: '',
            description: '',
            paperCount: 0,
            type: '',
        })
    }

    ngOnInit() {
        this.id$ = this.route.paramMap.map((params) => {
            return Number(params.get('id'))
        })

        this.printer$ = this.id$.pipe(switchMap((v) => this.printersService.getPrinter(v)))
    }
    updatePrinter() {
        const formValue = this.form.value as Printer
        this.printersService.updatePrinter(formValue)
    }
}
