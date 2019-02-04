import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookshelfComponent } from './bookshelf.component';

const routes: Routes = [
    { path: '', component: BookshelfComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BookshelfRoutingModule {}
