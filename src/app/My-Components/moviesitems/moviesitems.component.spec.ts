import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesitemsComponent } from './moviesitems.component';

describe('MoviesitemsComponent', () => {
  let component: MoviesitemsComponent;
  let fixture: ComponentFixture<MoviesitemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesitemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoviesitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
