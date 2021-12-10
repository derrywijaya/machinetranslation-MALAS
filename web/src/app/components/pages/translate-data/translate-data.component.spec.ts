import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateDataComponent } from './translate-data.component';

describe('UploadDataComponent', () => {
  let component: TranslateDataComponent;
  let fixture: ComponentFixture<TranslateDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TranslateDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TranslateDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
