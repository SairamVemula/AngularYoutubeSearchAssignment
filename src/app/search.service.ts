import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  // search;
  apikey = 'AIzaSyBI7bdGepvUyX5hbO_idCssTx6vUgfra6o';
  // nextPageToken;
  // searchURL = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=24&q=${this.search}&key=${this.apikey}`;

  // loadMoreUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=24&pageToken=${this.nextPageToken}&q=${this.search}&key=${this.apikey}`;

  constructor(private http: HttpClient) {}

  onSearch(search) {
    // return this.http.get('../assets/json/searchAngular.json');
    // this.search = search;
    // console.log(this.searchURL);
    return this.http.get(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=24&q=${search}&key=${this.apikey}`
    );
  }

  loadMore(nextPageToken, search) {
    // return this.http.get('../assets/json/searchAngularWithPageToken.json');
    // this.nextPageToken = nextPageToken;
    // this.search = search;
    // console.log(this.loadMoreUrl);
    return this.http.get(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=24&pageToken=${nextPageToken}&q=${search}&key=${this.apikey}`
    );
  }
}
