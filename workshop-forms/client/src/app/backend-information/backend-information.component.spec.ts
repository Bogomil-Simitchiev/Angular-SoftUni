import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackendInformationComponent } from './backend-information.component';

describe('BackendInformationComponent', () => {
  let component: BackendInformationComponent;
  let fixture: ComponentFixture<BackendInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackendInformationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackendInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
