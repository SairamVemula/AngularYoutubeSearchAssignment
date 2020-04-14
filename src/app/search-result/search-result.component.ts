import { Component, OnInit, Inject, Input } from '@angular/core';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css'],
})
export class SearchResultComponent implements OnInit {
  @Input() searchItems;

  ngOnInit(): void {
    console.log(this.searchItems);
  }
}