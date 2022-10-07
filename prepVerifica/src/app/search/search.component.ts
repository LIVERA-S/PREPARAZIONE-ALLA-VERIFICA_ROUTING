import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  query: string | undefined;
  obsProd: Observable<Object> | undefined;
  results: any;

  // faccio iniettare lo food service e faccio una ricerca
  constructor(public food: FoodService) {
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  submit(query: HTMLInputElement): void {

    if (!query.value) {
      return;
    }
    this.query = query.value;
    this.obsProd = this.food.searchProd(this.query);
    this.obsProd.subscribe(
      (data) => {
        this.results = data;
        console.log(this.results);
        localStorage.setItem('dataSource', JSON.stringify(this.results));
      });
  }

}
