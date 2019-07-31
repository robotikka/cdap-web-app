import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ModuleService {

  MODULE_URL = environment.module_url;

  constructor(private http: HttpClient) { }

  getAllModules() {
    return this.http.get(this.MODULE_URL);
  }

  addNewModule(module) {
    return this.http.post<any>(this.MODULE_URL, module)
    .pipe(map(data => {
      console.log(data);
      return data;
    }));
  }

  updateModule(id, module) {
    const params = new HttpParams().set('moduleId', id);

    return this.http.put(this.MODULE_URL + '?moduleId=' + id, module)
      .pipe(map(data => {
        console.log(data);
        return data;
      }));
  }
}
