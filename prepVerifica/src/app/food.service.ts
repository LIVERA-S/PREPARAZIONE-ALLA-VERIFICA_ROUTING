import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http: HttpClient) { }

  searchProd(query: string) {
    const url = `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${query}&page_size=2&json=true`;
    const headers = new HttpHeaders({
      Authorization: ""
    });

    let obsProd = this.http.get(url, { headers });
    return obsProd;
    //Ritorno un observable ai componenti che richiedono il servizio
  }

}
