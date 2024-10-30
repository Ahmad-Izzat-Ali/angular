import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceTableRowComponent } from './invoice-table-row.component';

describe('InvoiceTableRowComponent', () => {
  let component: InvoiceTableRowComponent;
  let fixture: ComponentFixture<InvoiceTableRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvoiceTableRowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvoiceTableRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
