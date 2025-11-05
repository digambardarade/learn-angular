import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompNgStyleComponent } from './comp-ng-style.component';

describe('CompNgStyleComponent', () => {
  let component: CompNgStyleComponent;
  let fixture: ComponentFixture<CompNgStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompNgStyleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompNgStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
