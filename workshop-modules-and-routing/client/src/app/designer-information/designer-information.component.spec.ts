import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignerInformationComponent } from './designer-information.component';

describe('DesignerInformationComponent', () => {
  let component: DesignerInformationComponent;
  let fixture: ComponentFixture<DesignerInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesignerInformationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesignerInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
