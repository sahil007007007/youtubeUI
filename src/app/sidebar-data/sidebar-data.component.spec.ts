import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarDataComponent } from './sidebar-data.component';

describe('SidebarDataComponent', () => {
  let component: SidebarDataComponent;
  let fixture: ComponentFixture<SidebarDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
