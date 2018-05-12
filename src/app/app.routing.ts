import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { PrinterListComponent } from './printer-list/printer-list.component'

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
        path: '**',
        redirectTo: '',
    },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
