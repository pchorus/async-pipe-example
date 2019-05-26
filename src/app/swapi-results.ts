export interface SwapiResults<T> {
  count: number;
  previous: string | null;
  next: string | null;
  results: T[];
}
