import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecommendationComponent } from './recommendation.component';
import { RecommendationRoutingModule } from './recommendation-routing.module';

@NgModule({
  declarations: [
    RecommendationComponent
  ],
  imports: [
    CommonModule,
    RecommendationRoutingModule
  ]
})
export class RecommendationModule { }
