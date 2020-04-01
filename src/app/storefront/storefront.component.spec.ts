import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StorefrontComponent } from './storefront.component';

describe('RootComponent', () => {
  let component: StorefrontComponent;
  let fixture: ComponentFixture<StorefrontComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StorefrontComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StorefrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
