import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { PaginationComponent } from './pagination/pagination.component';
import { ElementsPerPageComponent } from './elements-per-page/elements-per-page.component';
import { HttpClientModule } from '@angular/common/http';
import { ConfigService } from './config.service';
import { PaginationService } from './pagination.service';
import { PaginationPipe } from './pagination.pipe';

import { FormsModule } from '@angular/forms';
import { ModalDialogComponent } from './modal-dialog/modal-dialog.component';
import { ModalDialogService } from './modal-dialog.service';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    PaginationComponent,
    ElementsPerPageComponent,
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
