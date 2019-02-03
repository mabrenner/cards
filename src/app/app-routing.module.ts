import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookshelfComponent } from './bookshelf/bookshelf.component';
import { RecommendationComponent } from './recommendation/recommendation.component';

const routes: Routes = [
  { path: '', redirectTo: '/bookshelf', pathMatch: 'full' },
  { path: 'bookshelf', component: BookshelfComponent },
  { path: 'recommendation', component: RecommendationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
