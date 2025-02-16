import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Myc03NgifComponent } from './myc03-ngif.component';

describe('Myc02NgifComponent', () => {
  let component: Myc03NgifComponent;
  let fixture: ComponentFixture<Myc03NgifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Myc03NgifComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Myc03NgifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
