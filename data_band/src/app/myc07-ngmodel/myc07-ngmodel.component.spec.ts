import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Myc07NgmodelComponent } from './myc07-ngmodel.component';

describe('Myc07NgmodelComponent', () => {
  let component: Myc07NgmodelComponent;
  let fixture: ComponentFixture<Myc07NgmodelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Myc07NgmodelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Myc07NgmodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
