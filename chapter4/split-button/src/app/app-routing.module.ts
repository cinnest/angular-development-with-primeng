import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {SplitButtonComponent} from './section/splitbutton.component';

const router: Routes = [
    {path: '', redirectTo: 'section', pathMatch: 'full'},
    {path: 'section', component: SplitButtonComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
