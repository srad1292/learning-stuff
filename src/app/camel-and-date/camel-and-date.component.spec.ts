import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CamelAndDateComponent } from './camel-and-date.component';

describe('CamelAndDateComponent', () => {
  let component: CamelAndDateComponent;
  let fixture: ComponentFixture<CamelAndDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CamelAndDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamelAndDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
