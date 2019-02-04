import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { BookshelfModule } from './modules/bookshelf/bookshelf.module';
import { RecommendationModule } from './modules/recommendation/recommendation.module';

import { AppComponent } from './app.component';
import { AuthGuard } from './modules/auth/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    RecommendationModule,
    BookshelfModule
  ],
  providers: [
    AuthGuard
  ],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
