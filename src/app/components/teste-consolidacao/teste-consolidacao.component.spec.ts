import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteConsolidacaoComponent } from './teste-consolidacao.component';

describe('TesteConsolidacaoComponent', () => {
  let component: TesteConsolidacaoComponent;
  let fixture: ComponentFixture<TesteConsolidacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TesteConsolidacaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TesteConsolidacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
