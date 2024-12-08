import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryResult } from '../../../../types/src';
import { ConvertMarkdownPipe } from './convert-markdown.pipe';

@Component({
  selector: 'lib-recap',
  standalone: true,
  imports: [CommonModule, ConvertMarkdownPipe],
  templateUrl: './recap.component.html',
  styleUrl: './recap.component.css'
})
export class RecapComponent {
  readonly report = input.required<SummaryResult>();
}
