import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TestListComponent } from './test-list/test-list.component';

const routes: Routes = [
    { path: 'app', component: AppComponent },
    { path: 'tests', component: TestListComponent },
    { path: '', redirectTo: 'app', pathMatch: 'full' },
    { path: '**', redirectTo: 'app', pathMatch: 'full'},
  
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})

export class AppRoutingModule { }
