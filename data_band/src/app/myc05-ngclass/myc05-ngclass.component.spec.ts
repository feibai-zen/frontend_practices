import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Myc05NgclassComponent } from './myc05-ngclass.component';

describe('Myc05NgclassComponent', () => {
  let component: Myc05NgclassComponent;
  let fixture: ComponentFixture<Myc05NgclassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Myc05NgclassComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Myc05NgclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
