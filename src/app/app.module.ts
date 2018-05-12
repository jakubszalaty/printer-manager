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
import { Http } from '@angular/http'

@NgModule({
    declarations: [AppComponent, PrinterListComponent],
    imports: [
        BrowserModule,
        // Routing
        AppRoutingModule,
        // Stores
        StoreModule.forRoot({ printers: printersReducer }),
        HttpModule,
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
