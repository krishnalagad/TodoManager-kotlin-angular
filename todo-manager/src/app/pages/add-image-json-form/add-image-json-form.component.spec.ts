import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddImageJsonFormComponent } from './add-image-json-form.component';

describe('AddImageJsonFormComponent', () => {
  let component: AddImageJsonFormComponent;
  let fixture: ComponentFixture<AddImageJsonFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddImageJsonFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddImageJsonFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
