import { SummaryResult } from './summary-result';

export interface SummaryResponse {
  status: string;
  results: SummaryResult[];
}