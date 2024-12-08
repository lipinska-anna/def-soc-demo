import { AfterContentInit, Component, computed, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryResult } from '../../../../types/src';
import { NgxEchartsDirective, NgxEchartsModule, provideEchartsCore } from 'ngx-echarts';
import { EChartsCoreOption } from 'echarts';
import * as echarts from 'echarts/core';
import { BarChart, PieChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';
import { GridComponent, LegendComponent, TitleComponent, TooltipComponent } from 'echarts/components';

@Component({
  selector: 'lib-dataleak',
  standalone: true,
  imports: [CommonModule, NgxEchartsDirective, NgxEchartsModule],
  templateUrl: './dataleak.component.html',
  styleUrl: './dataleak.component.css',
  providers: [provideEchartsCore({ echarts })]
})
export class DataleakComponent implements AfterContentInit {
  readonly report = input.required<SummaryResult>();
  readonly reportChange = computed(() => this.fillOptions(this.report()));

  dataleakOption: EChartsCoreOption = {
    legend: {},
    tooltip: {},
    dataset: {
      dimensions: ['resolved', 'unresolved', 'total']
    },
    xAxis: { type: 'category' },
    yAxis: {},
    series: []
  };

  constructor() {
    echarts.use([BarChart, CanvasRenderer, GridComponent, TitleComponent, LegendComponent, TooltipComponent]);
  }

  private fillOptions(report: SummaryResult) {
    const categories = ['vip', 'domain_stealer', 'potential_stealer', 'other_stealer', 'general_leak'];

    this.dataleakOption['series'] = categories.map((category: string) => {
      return {
        name: category,
        data: [
          (report.n_dataleak as any).resolved[category],   // Resolved value
          (report.n_dataleak as any).unresolved[category], // Unresolved value
          (report.n_dataleak as any).total[category]       // Total value
        ],
        type: 'bar'
      };
    });
  }

  ngAfterContentInit(): void {
    this.reportChange();
  }

}
