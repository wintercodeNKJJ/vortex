import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DitailsComponent } from './ditails.component';

describe('DitailsComponent', () => {
  let component: DitailsComponent;
  let fixture: ComponentFixture<DitailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DitailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DitailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
