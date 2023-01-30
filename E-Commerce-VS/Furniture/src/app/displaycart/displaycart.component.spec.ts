import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaycartComponent } from './displaycart.component';

describe('DisplaycartComponent', () => {
  let component: DisplaycartComponent;
  let fixture: ComponentFixture<DisplaycartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplaycartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplaycartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
