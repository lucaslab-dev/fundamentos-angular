import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'notes',
  },
  {
    path: 'notes',
    loadChildren: () =>
      import('./notes/notes.routing').then((r) => r.NotesRouting),
  },
];
