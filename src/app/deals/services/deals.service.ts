import { first, tap, delay } from 'rxjs';
import { Deals } from './../model/deals';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DealsService {
  private readonly apiUrl = environment.apiUrl;
  private readonly APIlist = `${this.apiUrl}/listDeals`
  private readonly APIsave = `${this.apiUrl}/saveDeals`
  private readonly APIremove = `${this.apiUrl}/removeDeal`

  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<Deals[]>(this.APIlist)
    .pipe(
      first()
    );
  }

  save(record: Deals) {
    return this.http.post<Deals>(this.APIsave, record).pipe(first());
  }

  remove(record: Deals) {
    return this.http.post<Deals>(this.APIremove, record).pipe(first());
  }
}
