import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDitailcardComponent } from './item-ditailcard.component';

describe('ItemDitailcardComponent', () => {
  let component: ItemDitailcardComponent;
  let fixture: ComponentFixture<ItemDitailcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemDitailcardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemDitailcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
