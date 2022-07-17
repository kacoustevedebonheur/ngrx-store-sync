import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxStoreSyncComponent } from './ngrx-store-sync.component';

describe('NgrxStoreSyncComponent', () => {
  let component: NgrxStoreSyncComponent;
  let fixture: ComponentFixture<NgrxStoreSyncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgrxStoreSyncComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgrxStoreSyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
