import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BAMethodenPage } from './bamethoden.page';

const routes: Routes = [
  {
    path: '',
    component: BAMethodenPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BAMethodenPage]
})
export class BAMethodenPageModule {}
