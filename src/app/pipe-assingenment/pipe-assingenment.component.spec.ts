import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeAssingenmentComponent } from './pipe-assingenment.component';

describe('PipeAssingenmentComponent', () => {
  let component: PipeAssingenmentComponent;
  let fixture: ComponentFixture<PipeAssingenmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PipeAssingenmentComponent]
    });
    fixture = TestBed.createComponent(PipeAssingenmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
