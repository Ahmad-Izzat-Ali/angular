import {Component, OnInit} from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http'; // Import HttpClientModule
import {InvoiceTableRowComponent} from '../invoice-table-row/invoice-table-row.component';
import { CommonModule } from '@angular/common';

interface Invoice {
  id: number;
  supplierId: number;
  invoiceNumber: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  supplier: {
    id: number;
    contactName: string;
    address: string;
    city: string;
    postalCode: string;
    country: string;
    phone: string;
    email: string;
    website: string;
  };
}

interface DisplayInvoice {
  seq: string;
  supplier: string;
  invoiceNo: string;
  date: string;
  status: string;
}

@Component({
  selector: 'app-invoice-table',
  standalone: true,
  imports: [
    InvoiceTableRowComponent,
    CommonModule,
    HttpClientModule // Add HttpClientModule here
  ],
  templateUrl: './invoice-table.component.html',
  styleUrls: ['./invoice-table.component.css']
})
export class InvoiceTableComponent implements OnInit {
  invoices: DisplayInvoice[] = [];
  rowCount: number = 0;


  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchInvoices();
  }

  fetchInvoices(): void {
    this.http.get<Invoice[]>('http://localhost:5248/invoices')
      .subscribe({
        next: (data) => {
          this.invoices = data.map(invoice => ({
            seq: `PZ${invoice.id}`,
            supplier: invoice.supplier.contactName,
            invoiceNo: invoice.invoiceNumber,
            date: new Date(invoice.createdAt).toLocaleDateString(),
            status: invoice.status
          }));
          this.rowCount = this.invoices.length; // Count the number of records

        },
        error: (error) => console.error('Error fetching invoices:', error)
      });
  }
}
