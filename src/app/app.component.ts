import { SearchService } from './search.service';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Youtube-Search';
  search: String = '';
  searchList;
  nextList;
  nextPageToken: String;

  constructor(private searchService: SearchService) {}

  onSearch() {
    // console.log(this.search);
    this.searchService.onSearch(this.search).subscribe((data) => {
      // console.log(data);
      this.searchList = data;
      this.nextPageToken = this.searchList.nextPageToken;
    });
  }

  loadMore() {
    console.log('More Clicked');
    this.searchService
      .loadMore(this.nextPageToken, this.search)
      .subscribe((data) => {
        // console.log(data);
        this.nextList = data;
        this.nextPageToken = this.nextList.nextPageToken;
        Array.prototype.push.apply(this.searchList.items, this.nextList.items);
      });
  }
}
