import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterHome } from './center-home';

describe('CenterHome', () => {
  let component: CenterHome;
  let fixture: ComponentFixture<CenterHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CenterHome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CenterHome);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
