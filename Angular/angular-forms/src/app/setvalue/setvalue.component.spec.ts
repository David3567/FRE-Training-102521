import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetvalueComponent } from './setvalue.component';

describe('SetvalueComponent', () => {
  let component: SetvalueComponent;
  let fixture: ComponentFixture<SetvalueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetvalueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetvalueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
