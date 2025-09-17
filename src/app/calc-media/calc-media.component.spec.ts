import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcMediaComponent } from './calc-media.component';

describe('CalcMediaComponent', () => {
  let component: CalcMediaComponent;
  let fixture: ComponentFixture<CalcMediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalcMediaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalcMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
