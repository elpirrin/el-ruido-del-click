import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ratones } from './ratones';

describe('Ratones', () => {
  let component: Ratones;
  let fixture: ComponentFixture<Ratones>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ratones]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ratones);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
