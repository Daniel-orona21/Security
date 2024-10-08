import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipiosComponent } from './principios.component';

describe('PrincipiosComponent', () => {
  let component: PrincipiosComponent;
  let fixture: ComponentFixture<PrincipiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrincipiosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
