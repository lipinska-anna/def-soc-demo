import { AfterContentInit, Component, computed, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryResult } from '../../../../types/src';
import { EChartsCoreOption } from 'echarts';
import { NgxEchartsDirective, NgxEchartsModule, provideEchartsCore } from 'ngx-echarts';
import * as echarts from 'echarts/core';
import { BarChart, LineChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';
import { GridComponent, LegendComponent, TitleComponent, TooltipComponent } from 'echarts/components';

@Component({
  selector: 'lib-exposure',
  standalone: true,
  imports: [CommonModule, NgxEchartsDirective, NgxEchartsModule],
  templateUrl: './exposure.component.html',
  styleUrl: './exposure.component.css',
  providers: [provideEchartsCore({ echarts })]
})
export class ExposureComponent implements AfterContentInit {
  readonly report = input.required<SummaryResult>();
  readonly reportChange = computed(() => this.fillOptions(this.report()));

  options: EChartsCoreOption = {
    title: {
      text: 'Porte esposte',
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'left'
    },
    xAxis: {
      type: 'category',
      data: []
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [],
        type: 'bar'
      }
    ]
  };

  constructor() {
    echarts.use([BarChart, CanvasRenderer, GridComponent, LineChart, TitleComponent, LegendComponent, TooltipComponent]);
  }

  ngAfterContentInit(): void {
    this.reportChange();
  }

  private fillOptions(report: SummaryResult) {
    const ports = Object.keys(report.n_port);
    (this.options['xAxis'] as any).data = ports;

    const portSeries = ports.map(port => (report.n_port as any)[port].n);
    (this.options['series'] as any)[0].data = portSeries;

  }
}
