import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateHambuComponent } from './create-hambu.component';

describe('CreateHambuComponent', () => {
  let component: CreateHambuComponent;
  let fixture: ComponentFixture<CreateHambuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateHambuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateHambuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
