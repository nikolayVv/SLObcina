import { InjectionToken } from '@angular/core';

export const SHRAMBA_BRSKALNIKA = new InjectionToken<Storage>(
  'Shramba brskalnika',
  {
    providedIn: 'root',
    factory: () => localStorage
  }
);
