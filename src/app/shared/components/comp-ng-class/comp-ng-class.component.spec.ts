import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompNgClassComponent } from './comp-ng-class.component';

describe('CompNgClassComponent', () => {
  let component: CompNgClassComponent;
  let fixture: ComponentFixture<CompNgClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompNgClassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompNgClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
