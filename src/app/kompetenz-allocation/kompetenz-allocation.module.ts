import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { KompetenzAllocationPage } from './kompetenz-allocation.page';

const routes: Routes = [
  {
    path: '',
    component: KompetenzAllocationPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [KompetenzAllocationPage]
})
export class KompetenzAllocationPageModule {}
