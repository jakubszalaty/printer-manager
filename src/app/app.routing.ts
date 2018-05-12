import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { PrinterListComponent } from './printer-list/printer-list.component'
import { PrinterViewComponent } from './printer-view/printer-view.component'

/**
 * Setup all routes here
 */
const routes: Routes = [
    {
        path: '',
        component: PrinterListComponent,
        pathMatch: 'full',
    },
    {
        path: 'printer/:id',
        component: PrinterViewComponent,
        pathMatch: 'full',
    },
    {
        path: '**',
        redirectTo: '',
    },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
