import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { AuthGuard } from './modules/auth/auth-guard.service';

const routes: Routes = [
  { path: 'login', loadChildren: './modules/auth/auth.module#AuthModule' },
  { path: '', children: [
      { path: '', redirectTo: '/bookshelf', pathMatch: 'full' },
      {
        path: 'bookshelf',
        loadChildren: './modules/bookshelf/bookshelf.module#BookshelfModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'recommendation',
        loadChildren: './modules/recommendation/recommendation.module#RecommendationModule',
        canActivate: [AuthGuard]
      },
      { path: '', component: SidebarComponent, outlet: 'sidebar' },
      { path: '', component: HeaderComponent, outlet: 'header' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
