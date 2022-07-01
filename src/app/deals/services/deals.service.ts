import { first, tap } from 'rxjs';
import { Deals } from './../model/deals';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class DealsService {

  private readonly API = 'https://persistere.com.br/termsheet/listDeals';

  private readonly APIsave = 'https://persistere.com.br/termsheet/saveDeals';

  constructor(private http: HttpClient) { }

  list(){
    return this.http.get<Deals[]>(this.API)
    .pipe(
      first() //get only the first load
      // ,tap(deals => console.log(deals)) //show my retun on console.log
    )
  }

  save(record: Deals){
    console.log(record)
    return this.http.post<Deals>(this.APIsave, record).pipe(first())
  }
}
