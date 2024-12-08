import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryResult } from '../../../../types/src';

@Component({
  selector: 'lib-security-extra',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './security-extra.component.html',
  styleUrl: './security-extra.component.css',
})
export class SecurityExtraComponent {
  readonly report = input.required<SummaryResult>();

}
