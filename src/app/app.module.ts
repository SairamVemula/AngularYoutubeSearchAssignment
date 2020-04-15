import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { ResultCardComponent } from './result-card/result-card.component';
import { HoverDirective } from './hover.directive';
import { SearchService } from './search.service';
import { HideDirective } from './hide.directive';
import { BeforeSearchComponent } from './before-search/before-search.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchResultComponent,
    ResultCardComponent,
    HoverDirective,
    HideDirective,
    BeforeSearchComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [SearchService],
  bootstrap: [AppComponent],
})
export class AppModule {}
