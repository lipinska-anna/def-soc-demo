import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenav, MatSidenavContainer, MatSidenavModule } from '@angular/material/sidenav';
import { ReportService } from '../report.service';
import { Observable } from 'rxjs';
import { SummaryResponse, SummaryResult } from '../../../../types/src';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ReportComponent } from '../report/report.component';

@Component({
  selector: 'lib-reports-list',
  standalone: true,
  imports: [CommonModule, MatSidenavContainer, MatSidenav, MatSidenavModule, MatTooltipModule, ReportComponent],
  templateUrl: './reports-list.component.html',
  styleUrl: './reports-list.component.css'
})
export class ReportsListComponent {

  readonly #reportService = inject(ReportService);

  readonly reports$: Observable<SummaryResponse>;

  readonly selectedReport = signal<SummaryResult | null>(null);

  constructor() {
    this.reports$ = this.#reportService.getCachedReports();
  }

  public isInRange(textNumber: string, min: number, max: number): boolean {
    return Number(textNumber) >= min && Number(textNumber) <= max;
  }
}
