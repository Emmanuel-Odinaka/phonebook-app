import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadSessionComponent } from './read-session.component';

describe('ReadSessionComponent', () => {
  let component: ReadSessionComponent;
  let fixture: ComponentFixture<ReadSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadSessionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
