import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadAvatarComponent } from './load-avatar.component';

describe('LoadAvatarComponent', () => {
  let component: LoadAvatarComponent;
  let fixture: ComponentFixture<LoadAvatarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadAvatarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
