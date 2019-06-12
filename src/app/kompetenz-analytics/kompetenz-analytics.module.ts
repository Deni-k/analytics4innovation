import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { KompetenzAnalyticsPage } from './kompetenz-analytics.page';

const routes: Routes = [
  {
    path: '',
    component: KompetenzAnalyticsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [KompetenzAnalyticsPage]
})
export class KompetenzAnalyticsPageModule {}
