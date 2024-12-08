import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { shareReplay, take, tap } from 'rxjs';
import { SummaryResponse } from '../../../types/src';

@Injectable({
  providedIn: 'root',
})
export class ReportService {
  readonly #http = inject(HttpClient);

  public getCachedReports() {
    return this.getReports().pipe(
      tap((report) => console.log(report)),
      take(1),
      shareReplay(1)
    );
  }

  public getReports() {
    return this.#http.get<SummaryResponse>('data.json')
  }
}