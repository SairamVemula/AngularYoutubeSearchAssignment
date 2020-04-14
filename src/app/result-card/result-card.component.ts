import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-result-card',
  templateUrl: './result-card.component.html',
  styleUrls: ['./result-card.component.css'],
})
export class ResultCardComponent implements OnInit {
  @Input() result;

  constructor() {}

  ngOnInit(): void {
    console.log(typeof this.result);
  }
}
