import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicNgForComponent } from './dynamic-ng-for.component';

describe('DynamicNgForComponent', () => {
  let component: DynamicNgForComponent;
  let fixture: ComponentFixture<DynamicNgForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicNgForComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicNgForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
