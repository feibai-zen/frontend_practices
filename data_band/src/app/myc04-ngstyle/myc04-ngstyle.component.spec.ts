import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Myc04NgstyleComponent } from './myc04-ngstyle.component';

describe('Myc04NgstyleComponent', () => {
  let component: Myc04NgstyleComponent;
  let fixture: ComponentFixture<Myc04NgstyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Myc04NgstyleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Myc04NgstyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
