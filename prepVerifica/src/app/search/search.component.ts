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

  constructor(public food: FoodService) { }

  ngOnInit(): void {

  }

  submit(query: HTMLInputElement): void {
    if (!query.value) {
      return;
    }
    this.query = query.value;
    this.obsProd = this.food.searchProd(this.query);
    this.obsProd.subscribe((data: any) => {
      this.results = data;
      console.log(this.results);
    });
  }

  renderResults(res: any): void {
    this.results = null;
    if (res && res.tracks && res.tracks.items) {
      this.results = res.tracks.items;
    }
  }

}
