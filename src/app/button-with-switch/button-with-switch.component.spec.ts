import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonWithSwitchComponent } from './button-with-switch.component';

describe('ButtonWithSwitchComponent', () => {
  let component: ButtonWithSwitchComponent;
  let fixture: ComponentFixture<ButtonWithSwitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonWithSwitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonWithSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
