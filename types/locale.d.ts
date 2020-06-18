export interface Locale {
  install(): void;
  use(lang: string, messages: Record<string, any>): void;
  add(messages: Record<string, any>): void;
}

export const Locale: Locale;
