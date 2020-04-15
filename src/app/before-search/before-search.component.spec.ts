import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeforeSearchComponent } from './before-search.component';

describe('BeforeSearchComponent', () => {
  let component: BeforeSearchComponent;
  let fixture: ComponentFixture<BeforeSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeforeSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeforeSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
