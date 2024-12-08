import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryResult } from '../../../../types/src';
import { MatCard } from '@angular/material/card';
import { VulnerabilitiesComponent } from '../vulnerabilities/vulnerabilities.component';
import { ExposureComponent } from '../exposure/exposure.component';
import { DataleakComponent } from '../dataleak/dataleak.component';
import { EmailSecurityComponent } from '../email_security/email_security.component';
import { CertificatesComponent } from '../certificates/certificates.component';
import { SecurityExtraComponent } from '../security-extra/security-extra.component';
import { DomainsComponent } from '../domains/domains.component';
import { RecapComponent } from '../recap/recap.component';

@Component({
  selector: 'lib-report',
  imports: [CommonModule, MatCard, VulnerabilitiesComponent, ExposureComponent, DataleakComponent, EmailSecurityComponent, CertificatesComponent, SecurityExtraComponent, DomainsComponent, RecapComponent],
  standalone: true,
  templateUrl: './report.component.html',
  styleUrl: './report.component.css',
})
export class ReportComponent {

  readonly report = input.required<SummaryResult>();
}
