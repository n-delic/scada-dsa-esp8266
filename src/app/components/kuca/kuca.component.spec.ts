import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KucaComponent } from './kuca.component';

describe('KucaComponent', () => {
  let component: KucaComponent;
  let fixture: ComponentFixture<KucaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KucaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KucaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
