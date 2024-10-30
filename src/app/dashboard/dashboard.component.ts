import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {
  MatDrawer,
  MatDrawerContainer, MatDrawerContent,
  MatSidenav,
  MatSidenavContainer,
  MatSidenavContent
} from '@angular/material/sidenav';
import {MatListItem, MatNavList} from '@angular/material/list';
import {MatCard, MatCardContent, MatCardTitle} from '@angular/material/card';
import {MatDrawerHarness} from '@angular/material/sidenav/testing';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatCell, MatHeaderCell, MatTable} from '@angular/material/table';
import {InvoiceListComponent} from './invoice-list/invoice-list.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavContainer,
    MatSidenav,
    MatNavList,
    MatCard, MatCardTitle,
    MatCardContent,
    MatSidenavContent,
    MatDrawer,
    MatDrawerContainer,
    MatDrawerContent,
    MatFormField,
    MatTable,
    MatLabel,
    MatCell,
    MatHeaderCell,
    MatListItem,
    InvoiceListComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
