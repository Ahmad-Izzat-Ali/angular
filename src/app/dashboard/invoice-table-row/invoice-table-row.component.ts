import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-invoice-table-row',
  standalone: true,
  imports: [],
  templateUrl: './invoice-table-row.component.html',
  styleUrl: './invoice-table-row.component.css'
})
export class InvoiceTableRowComponent {
  @Input() invoice: any;
}
