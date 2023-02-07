import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEditButtonWrapperComponent } from './user-edit-button-wrapper.component';

describe('UserEditButtonWrapperComponent', () => {
  let component: UserEditButtonWrapperComponent;
  let fixture: ComponentFixture<UserEditButtonWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserEditButtonWrapperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserEditButtonWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
