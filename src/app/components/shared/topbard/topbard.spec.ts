import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Topbard } from './topbard';

describe('Topbard', () => {
  let component: Topbard;
  let fixture: ComponentFixture<Topbard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Topbard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Topbard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
