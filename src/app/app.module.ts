import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import {
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatStepperModule,
} from '@angular/material'
import { StoreModule } from '@ngrx/store'
import { HttpModule } from '@angular/http'

import { AppComponent } from './app.component'
import { AppRoutingModule } from './app.routing'
import { PrinterListComponent } from './printer-list/printer-list.component'
import { printersReducer } from './stores/printers/printers.reducer'
import { PrintersService } from './services/printers/printers.service'
import { PrinterViewComponent } from './printer-view/printer-view.component'
import { ConnectFormDirective } from './directives/connect-form/connect-form.directive'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { OrderByPipe } from './pipes/order-by.pipe'
import { PrintersFilterPipe } from './pipes/printers-filter.pipe';

@NgModule({
    declarations: [
        AppComponent,
        PrinterListComponent,
        PrinterViewComponent,
        ConnectFormDirective,
        OrderByPipe,
        PrintersFilterPipe,
    ],
    imports: [
        BrowserModule,
        // Routing
        AppRoutingModule,
        // Stores
        StoreModule.forRoot({ printers: printersReducer }),
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        // MaterialDesign
        MatAutocompleteModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCardModule,
        MatCheckboxModule,
        MatChipsModule,
        MatDatepickerModule,
        MatDialogModule,
        MatExpansionModule,
        MatGridListModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatNativeDateModule,
        MatPaginatorModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatRippleModule,
        MatSelectModule,
        MatSidenavModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatSnackBarModule,
        MatSortModule,
        MatTableModule,
        MatTabsModule,
        MatToolbarModule,
        MatTooltipModule,
        MatStepperModule,
    ],
    providers: [PrintersService],
    bootstrap: [AppComponent],
})
export class AppModule {}
