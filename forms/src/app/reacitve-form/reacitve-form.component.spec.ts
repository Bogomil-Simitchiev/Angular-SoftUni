import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReacitveFormComponent } from './reacitve-form.component';

describe('ReacitveFormComponent', () => {
  let component: ReacitveFormComponent;
  let fixture: ComponentFixture<ReacitveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReacitveFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReacitveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
