import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../../environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CodeGeneratorService {
  constructor(private http: HttpClient) { }

  getCodes(): Observable<{ codes: string[] }> {
    return this.http.get<{ codes: string[] }>(`${environment.apiBaseUrl}/codes`);
  }
}
