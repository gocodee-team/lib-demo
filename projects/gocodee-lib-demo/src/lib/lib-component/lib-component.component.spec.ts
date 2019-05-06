import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibComponentComponent } from './lib-component.component';

describe('LibComponentComponent', () => {
  let component: LibComponentComponent;
  let fixture: ComponentFixture<LibComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
