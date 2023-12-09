import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormvalidateComponent } from './formvalidate.component';

describe('FormvalidateComponent', () => {
  let component: FormvalidateComponent;
  let fixture: ComponentFixture<FormvalidateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormvalidateComponent]
    });
    fixture = TestBed.createComponent(FormvalidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
