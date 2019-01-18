import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CardDialogComponent } from './card-dialog/card-dialog.component';
import { PaginationComponent } from './pagination/pagination.component';
// import { PaginationPipe } from './shared/pagination.pipe';
import { PaginationService } from './shared/services/pagination.service';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    PaginationComponent,
    // PaginationPipe,
    CardDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    SharedModule.forRoot()
  ],
  providers: [
    PaginationService
  ],
  bootstrap: [AppComponent],
  exports: [
    // PaginationPipe,
    PaginationComponent
  ]
})
export class AppModule { }
