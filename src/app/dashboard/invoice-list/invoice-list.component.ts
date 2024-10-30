import { Component } from '@angular/core';
import {SearchBarComponent} from '../search-bar/search-bar.component';
import {FilterButtonsComponent} from '../filter-buttons/filter-buttons.component';
import {InvoiceTableComponent} from '../invoice-table/invoice-table.component';

@Component({
  selector: 'app-invoice-list',
  standalone: true,
  imports: [
    SearchBarComponent,
    FilterButtonsComponent,
    InvoiceTableComponent
  ],
  templateUrl: './invoice-list.component.html',
  styleUrl: './invoice-list.component.css'
})
export class InvoiceListComponent {

}
