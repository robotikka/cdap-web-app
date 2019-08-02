import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { ModuleService } from './module.service';

@Injectable()
export class PlaylistDataResolve implements Resolve<any> {

  constructor(private moduleService: ModuleService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.moduleService.getModuleContent(route.params['id']);
  }
}
