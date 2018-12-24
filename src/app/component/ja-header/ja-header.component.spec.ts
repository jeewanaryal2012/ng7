import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JaHeaderComponent } from './ja-header.component';

describe('JaHeaderComponent', () => {
  let component: JaHeaderComponent;
  let fixture: ComponentFixture<JaHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JaHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JaHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
