import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VetAppComponent } from './vet-app.component';

describe('VetAppComponent', () => {
  let component: VetAppComponent;
  let fixture: ComponentFixture<VetAppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VetAppComponent]
    });
    fixture = TestBed.createComponent(VetAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
