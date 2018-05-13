import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { ActivatedRoute, Router } from '@angular/router'
import { PrintersService } from '../services/printers/printers.service'
import 'rxjs/add/operator/map'
import { Printer } from '../types'
import { switchMap } from 'rxjs/operators'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { MatSnackBar } from '@angular/material'

@Component({
    selector: 'app-printer-view',
    templateUrl: './printer-view.component.html',
    styleUrls: ['./printer-view.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrinterViewComponent implements OnInit {
    id$: Observable<number>
    printer$: Observable<Printer>
    form: FormGroup
    statusChoices: string[] = ['online', 'offline', 'printing', 'broken']
    typeChoices: string[] = ['ink-jet', 'laser']

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private printersService: PrintersService,
        private fb: FormBuilder,
        private snackBar: MatSnackBar
    ) {
        this.form = fb.group({
            id: '',
            name: ['', Validators.required],
            status: '',
            networkAddress: [
                '',
                Validators.pattern(
                    /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/
                ),
            ],
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

        this.printer$.subscribe((v) => {
            if (!v) {
                this.router.navigate(['/'])
                // Fix for bug: ExpressionChangedAfterItHasBeenCheckedError
                setTimeout(() => {
                    this.snackBar.open('Printer not exists', '', { duration: 1000 })
                }, 0)
            }
        })
    }

    updatePrinter() {
        if (this.form.invalid) {
            this.snackBar.open('Form is invalid', '', { duration: 1000 })
            return
        }
        const formValue = this.form.value as Printer
        this.printersService.updatePrinter(formValue)
        this.snackBar.open('Printer updated', '', { duration: 1000 })
    }
}
