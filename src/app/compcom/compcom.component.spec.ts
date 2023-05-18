import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompcomComponent } from './compcom.component';

describe('CompcomComponent', () => {
  let component: CompcomComponent;
  let fixture: ComponentFixture<CompcomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompcomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompcomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
