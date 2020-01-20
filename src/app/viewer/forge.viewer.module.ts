import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ForgeViewer } from './forge.viewer';

import ForgeViewerLoaderService from '../shared/services/forgeViewerLoader.service';
import { ScriptLoaderModule } from 'ngx-script-loader';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: ForgeViewer
      }
    ]),
    ScriptLoaderModule
  ],
  providers: [
    ForgeViewerLoaderService
  ],
  declarations: [ForgeViewer]
})
export class ForgeViewerModule {}
