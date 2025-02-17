import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Myc06NgswitchComponent } from './myc06-ngswitch.component';

describe('Myc06NgswitchComponent', () => {
  let component: Myc06NgswitchComponent;
  let fixture: ComponentFixture<Myc06NgswitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Myc06NgswitchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Myc06NgswitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
