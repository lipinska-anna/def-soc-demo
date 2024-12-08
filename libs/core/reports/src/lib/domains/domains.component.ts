import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryResult } from '../../../../types/src';

@Component({
  selector: 'lib-domains',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './domains.component.html',
  styleUrl: './domains.component.css',
})
export class DomainsComponent {
  readonly report = input.required<SummaryResult>();

}
