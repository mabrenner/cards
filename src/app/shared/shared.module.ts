import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalDialogModule } from './components/modal-dialog/modal-dialog.module';
import { PaginationModule } from './components/pagination/pagination.module';

import { ConfigService } from './services/config.service';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    ModalDialogModule,
    PaginationModule
  ],
  exports: [
    ModalDialogModule,
    PaginationModule
  ],
  declarations: [
    HeaderComponent,
    SidebarComponent
  ]
})
export class SharedModule {
  static forRoot() {
    return {
      ngModule: SharedModule,
      providers: [ ConfigService ]
    };
  }
 }
