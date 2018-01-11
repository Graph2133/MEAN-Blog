
 import {FormsModule} from '@angular/forms'
 import { NgModule } from '@angular/core';
 import { MdInputModule } from '@angular/material';
 import { MdIconModule } from '@angular/material';
 import { MdProgressSpinnerModule } from '@angular/material';
 import { MdDialogModule} from '@angular/material';
 import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
 import { MdCardModule } from '@angular/material';
 import { MdButtonModule } from '@angular/material';
 import { MdTabsModule } from '@angular/material';

@NgModule({
  imports: [MdInputModule,
    MdIconModule,
    MdProgressSpinnerModule,
    MdDialogModule,
    FormsModule,
    MdCardModule,
    MdButtonModule,
    MdTabsModule],

  exports: [MdInputModule,
    MdIconModule,
    MdProgressSpinnerModule,
    MdDialogModule,
    DeleteDialogComponent,
    MdCardModule,
    MdButtonModule,
    MdTabsModule],
 
    declarations: [
        DeleteDialogComponent,
    ],
 
    entryComponents: [
        DeleteDialogComponent,
    ],
})

export class AppMaterialModule { }