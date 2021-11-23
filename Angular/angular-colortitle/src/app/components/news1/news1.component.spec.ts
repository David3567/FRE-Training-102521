import { ComponentFixture, TestBed } from '@angular/core/testing';

import { News1Component } from './news1.component';

describe('News1Component', () => {
  let component: News1Component;
  let fixture: ComponentFixture<News1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ News1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(News1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
