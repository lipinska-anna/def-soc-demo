import { LeakCounts } from './leak-counts';

export interface DataLeakDetails {
  total: LeakCounts;
  resolved: LeakCounts;
  unresolved: LeakCounts;
  enumeration: number;
}