import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  standalone: true,
  templateUrl: './list.component.html',
  imports: [NgFor],
})
export class ListComponent {}
