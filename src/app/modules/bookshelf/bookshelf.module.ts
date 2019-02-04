import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BookshelfComponent } from './bookshelf.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CardComponent } from './card/card.component';
import { CardDialogComponent } from './card-dialog/card-dialog.component';
import { BookshelfRoutingModule } from './bookshelf-routing.module';

@NgModule({
  declarations: [
    BookshelfComponent,
    CardComponent,
    CardDialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    BookshelfRoutingModule
  ]
})
export class BookshelfModule { }
