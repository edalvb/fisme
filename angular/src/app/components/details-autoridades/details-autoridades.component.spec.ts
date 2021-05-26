import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsAutoridadesComponent } from './details-autoridades.component';

describe('DetailsAutoridadesComponent', () => {
  let component: DetailsAutoridadesComponent;
  let fixture: ComponentFixture<DetailsAutoridadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsAutoridadesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsAutoridadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
