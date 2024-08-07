import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontendInformationComponent } from './frontend-information.component';

describe('FrontendInformationComponent', () => {
  let component: FrontendInformationComponent;
  let fixture: ComponentFixture<FrontendInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrontendInformationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrontendInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
