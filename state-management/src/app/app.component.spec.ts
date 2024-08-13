import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { select, Store } from '@ngrx/store';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { increment } from './+store';

fdescribe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [
        {
          provide: Store,
          useValue: {
            select: () => of(0),
            dispatch: () => { }
          }
        }
      ]
    })

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should show 0 as initial state', () => {
    fixture.detectChanges();
    const countContent = fixture.debugElement.query(By.css('div'));
    expect(countContent).toBeTruthy();
    expect(countContent.nativeElement.textContent.trim()).toEqual('Counter: 0');
  });
  it('should trigger action upon clicking increment', () => {
    const store = TestBed.inject(Store);
    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
    const incrementBtn = fixture.debugElement.query(By.css('[data-id="increment-btn"]'));

    incrementBtn.triggerEventHandler('click', {});

    expect(store.dispatch).toHaveBeenCalledWith(increment());

  });
})
