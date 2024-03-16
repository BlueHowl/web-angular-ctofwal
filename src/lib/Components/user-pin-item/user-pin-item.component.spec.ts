import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPinItemComponent } from './user-pin-item.component';

describe('ZoneItemComponent', () => {
  let component: UserPinItemComponent;
  let fixture: ComponentFixture<UserPinItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserPinItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserPinItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
