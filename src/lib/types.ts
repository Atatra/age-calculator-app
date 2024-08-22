import { CSSProperties } from "react";

export interface ErrorMap {
  day: string | null;
  month: string | null;
  year: string | null;
  date: string | null;
}

export interface DateFromBirth {
  years: number | null;
  months: number | null;
  days: number | null;
}

export interface Odometer extends CSSProperties {
  "--day": number;
  "--month": number;
  "--year": number;
}
