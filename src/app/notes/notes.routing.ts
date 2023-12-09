import { Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';

export const NotesRouting: Routes = [
  { path: '', component: ListComponent },
  { path: 'add', component: AddComponent },
];
