import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogItmComponent } from './blog-itm.component';

describe('BlogItmComponent', () => {
  let component: BlogItmComponent;
  let fixture: ComponentFixture<BlogItmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogItmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogItmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
