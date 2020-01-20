import { Component, AfterViewInit, OnDestroy, ViewChild } from '@angular/core';
import ForgeViewerLoaderService from '../shared/services/forgeViewerLoader.service';
@Component({
  selector: 'forge-viewer',
  templateUrl: 'forge.viewer.html',
  styleUrls: ['forge.viewer.scss'],
})
export class ForgeViewer {
  svfURL = 'assets/models/shaver/0.svf';
  viewer:Autodesk.Viewing.GuiViewer3D;
  @ViewChild('container', {static: false}) container;

  constructor(private forgeViewerLoaderService: ForgeViewerLoaderService) {}

  ngAfterViewInit(){
    this.forgeViewerLoaderService.load('sample').then(() => Autodesk.Viewing.Initializer({env: 'Local'}, () => (this.viewer = new Autodesk.Viewing.GuiViewer3D(this.container.nativeElement)).start(this.svfURL)))
  }

  NgOnDestroy(){
    this.forgeViewerLoaderService.cancel('sample');
    this.viewer && this.viewer.finish()
  }

}
