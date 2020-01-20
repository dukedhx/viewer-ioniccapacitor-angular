import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { ScriptService } from 'ngx-script-loader';

@Injectable()
export default class ForgeViewerLoaderService {
  promises: Promise<any>[];
  private loadPromise: Promise<any>;

  constructor(private scriptService: ScriptService) {
    this.promises = [];
  }

  load(name: string){
    if(!this.loadPromise){
      this.loadPromise = Promise.all([new Promise(resolve => this.scriptService.loadScript(environment.viewerScriptURL).subscribe(resolve)), new Promise(resolve => {
        const link  = document.createElement('link');
        link.rel  = 'stylesheet';
        link.type = 'text/css';
        link.href = environment.viewerStyleURL;
        link.onload = resolve;
        document.getElementsByTagName('head')[0].appendChild(link);
      })])
    }
    return this.promises[name] = new Promise(async (resolve, reject) => {
      await this.loadPromise;
      if(this.promises[name])
        resolve();
      else reject(null)
    })
  }

  cancel(name: string){
    delete this.promises[name]
  }
}
