import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HimBibleComponent } from './him-bible.component';

describe('HimBibleComponent', () => {
  let component: HimBibleComponent;
  let fixture: ComponentFixture<HimBibleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HimBibleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HimBibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
