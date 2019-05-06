import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GocodeeLibDemoComponent } from './gocodee-lib-demo.component';

describe('GocodeeLibDemoComponent', () => {
  let component: GocodeeLibDemoComponent;
  let fixture: ComponentFixture<GocodeeLibDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GocodeeLibDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GocodeeLibDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
