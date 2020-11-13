import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpacexCardComponent } from './spacex-card.component';

describe('SpacexCardComponent', () => {
  let component: SpacexCardComponent;
  let fixture: ComponentFixture<SpacexCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpacexCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpacexCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
