import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { RouterModule } from '@angular/router';


import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatAutocompleteModule, 
  MatInputModule, MatFormFieldModule,
  MatTableModule, MatPaginatorModule,
} from '@angular/material';


import { AppComponent } from './app.component';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { TestListComponent } from './test-list/test-list.component';

import { AppRoutingModule } from './app-routing.module';

import { TestListService } from './test-list.service';

@NgModule({
  declarations: [
    AppComponent,
    NameEditorComponent,
    ProfileEditorComponent,
    TestListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
  ],
  providers: [TestListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
