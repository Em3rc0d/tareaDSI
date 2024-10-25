import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasitaComponent } from './casita.component';

describe('CasitaComponent', () => {
  let component: CasitaComponent;
  let fixture: ComponentFixture<CasitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CasitaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CasitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
