import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-notes-list',
  standalone: true,
  templateUrl: './notes-list.component.html',
  imports: [NgFor],
})
export class NotesListComponent {}
