import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvTempComponent } from './conv-temp.component';

describe('ConvTempComponent', () => {
  let component: ConvTempComponent;
  let fixture: ComponentFixture<ConvTempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConvTempComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConvTempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
