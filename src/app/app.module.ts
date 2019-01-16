import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { PaginationComponent } from './pagination/pagination.component';
import { ModalDialogComponent } from './modal-dialog/modal-dialog.component';
import { PaginationPipe } from './shared/pagination.pipe';
import { ConfigService } from './shared/services/config.service';
import { ModalDialogService } from './shared/services/modal-dialog.service';
import { PaginationService } from './shared/services/pagination.service';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    PaginationComponent,
    PaginationPipe,
    ModalDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ConfigService, PaginationService, ModalDialogService],
  bootstrap: [AppComponent],
  exports: [PaginationPipe, PaginationComponent]
})
export class AppModule { }
