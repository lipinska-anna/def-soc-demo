import { AfterContentInit, Component, computed, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EChartsCoreOption } from 'echarts';
import { NgxEchartsDirective, NgxEchartsModule, provideEchartsCore } from 'ngx-echarts';
import { SummaryResult } from '../../../../types/src';
import * as echarts from 'echarts/core';
import { BarChart, PieChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';
import { GridComponent, LegendComponent, TitleComponent, TooltipComponent } from 'echarts/components';

@Component({
  selector: 'lib-vulnerabilities',
  standalone: true,
  imports: [CommonModule, NgxEchartsDirective, NgxEchartsModule],
  templateUrl: './vulnerabilities.component.html',
  styleUrl: './vulnerabilities.component.css',
  providers: [provideEchartsCore({ echarts })]
})
export class VulnerabilitiesComponent implements AfterContentInit {

  readonly report = input.required<SummaryResult>();
  readonly reportChange = computed(() => this.fillOptions(this.report()));

  passiveChartOption: EChartsCoreOption = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'left'
    },
    series: [
      {
        name: 'Livello criticità',
        type: 'pie',
        radius: '50%',
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        },
        data: []
      }
    ],
    title: {
      text: 'Vulnerabilità passive',
      left: 'center'
    }

  };

  activeChartOption: EChartsCoreOption = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'left'
    },
    series: [
      {
        name: 'Livello criticità',
        type: 'pie',
        radius: '50%',
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        },
        data: []
      }
    ],
    title: {
      text: 'Vulnerabilità attive',
      left: 'center'
    }
  };

  constructor() {
    echarts.use([BarChart, CanvasRenderer, GridComponent, PieChart, TitleComponent, LegendComponent, TooltipComponent]);
  }

  private fillByType(chartOption: EChartsCoreOption, type: string, report: SummaryResult) {
    Object.keys((report.n_vulns as any)[type]).forEach(name => {
      let value = ((report.n_vulns as any)[type] as any)[name];
      (chartOption['series'] as any)[0].data.push({ value, name });
    });
  }

  private fillOptions(report: SummaryResult) {
    this.fillByType(this.activeChartOption, 'active', report);
    this.fillByType(this.passiveChartOption, 'passive', report);
  }

  ngAfterContentInit(): void {
    this.reportChange();
  }
}
