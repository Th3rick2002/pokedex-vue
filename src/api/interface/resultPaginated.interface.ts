export interface ResultPaginated<T> {
  results: T[];
  count: number;
  next: string;
  previous: string;
}
