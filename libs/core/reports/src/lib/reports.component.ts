import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'lib-reports',
  imports: [CommonModule, RouterOutlet],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.css',
  standalone: true
})
export class ReportsComponent {}
