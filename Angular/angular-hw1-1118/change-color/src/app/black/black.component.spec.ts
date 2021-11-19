import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackComponent } from './black.component';

describe('BlackComponent', () => {
  let component: BlackComponent;
  let fixture: ComponentFixture<BlackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
