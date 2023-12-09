import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotesService } from '../notes.service';

@Component({
  selector: 'app-edit',
  standalone: true,
  templateUrl: './edit.component.html',
})
export class EditComponent {
  nodeIndex = -1;
  note?: string;

  private notesService = inject(NotesService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  constructor() {
    const index = this.route.snapshot.paramMap.get('index');

    if (index) {
      this.nodeIndex = +index;
      this.note = this.notesService.notes().at(this.nodeIndex);
    }
  }

  edit(note: string) {
    this.notesService.edit({ index: this.nodeIndex, note: note });
    this.router.navigate(['/notes']);
  }
}
