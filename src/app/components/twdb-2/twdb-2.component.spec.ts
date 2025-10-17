import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Twdb2Component } from './twdb-2.component';

describe('Twdb2Component', () => {
  let component: Twdb2Component;
  let fixture: ComponentFixture<Twdb2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Twdb2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Twdb2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
