import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncvalidatorComponent } from './asyncvalidator.component';

describe('AsyncvalidatorComponent', () => {
  let component: AsyncvalidatorComponent;
  let fixture: ComponentFixture<AsyncvalidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsyncvalidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsyncvalidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
