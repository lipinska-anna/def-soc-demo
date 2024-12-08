import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryResult } from '../../../../types/src';

@Component({
  selector: 'lib-email-security',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './email_security.component.html',
  styleUrl: './email_security.component.css',
})
export class EmailSecurityComponent {
  readonly report = input.required<SummaryResult>();

}
