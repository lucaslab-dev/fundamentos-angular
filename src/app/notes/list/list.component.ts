import { Component, inject } from '@angular/core';
import { NotesService } from '../notes.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './list.component.html',
})
export class ListComponent {
  private notesService = inject(NotesService);
  notes = () => this.notesService.notes();
}
