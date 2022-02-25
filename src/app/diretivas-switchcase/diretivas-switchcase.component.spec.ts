import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivasSwitchcaseComponent } from './diretivas-switchcase.component';

describe('DiretivasSwitchcaseComponent', () => {
  let component: DiretivasSwitchcaseComponent;
  let fixture: ComponentFixture<DiretivasSwitchcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiretivasSwitchcaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiretivasSwitchcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
