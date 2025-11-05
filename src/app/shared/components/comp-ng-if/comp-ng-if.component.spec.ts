import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompNgIfComponent } from './comp-ng-if.component';

describe('CompNgIfComponent', () => {
  let component: CompNgIfComponent;
  let fixture: ComponentFixture<CompNgIfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompNgIfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompNgIfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
