import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirComponentComponent } from './dir-component.component';

describe('DirComponentComponent', () => {
  let component: DirComponentComponent;
  let fixture: ComponentFixture<DirComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DirComponentComponent]
    });
    fixture = TestBed.createComponent(DirComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
