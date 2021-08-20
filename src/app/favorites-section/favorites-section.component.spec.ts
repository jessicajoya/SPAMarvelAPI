import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritesSectionComponent } from './favorites-section.component';

describe('FavoritesSectionComponent', () => {
  let component: FavoritesSectionComponent;
  let fixture: ComponentFixture<FavoritesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoritesSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
