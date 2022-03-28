import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { FretboardConfigModule } from './fretboard-config.module';

describe('FretboardConfigComponent', () => {
  @Component({
    selector: 'app-fretboard-config-spec',
    template: `
      <app-fretboard-config></app-fretboard-config>
    `
  })
  class FretboardConfigSpecComponent {
  }

  let component: FretboardConfigSpecComponent;
  let fixture: ComponentFixture<FretboardConfigSpecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FretboardConfigSpecComponent ],
      imports: [FretboardConfigModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FretboardConfigSpecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
