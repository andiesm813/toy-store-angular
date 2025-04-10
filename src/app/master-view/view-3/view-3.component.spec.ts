import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { IGX_INPUT_GROUP_DIRECTIVES, IgxButtonDirective, IgxRippleDirective, IgxSnackbarComponent, IGX_SLIDER_DIRECTIVES } from 'igniteui-angular';
import { View3Component } from './view-3.component';

describe('View3Component', () => {
  let component: View3Component;
  let fixture: ComponentFixture<View3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [View3Component, NoopAnimationsModule, FormsModule, HttpClientTestingModule, IGX_INPUT_GROUP_DIRECTIVES, IgxButtonDirective, IgxRippleDirective, IgxSnackbarComponent, IGX_SLIDER_DIRECTIVES]
    })
    .compileComponents();

    fixture = TestBed.createComponent(View3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
