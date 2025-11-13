import { Component, input } from '@angular/core';

@Component({
  selector: 'app-infobox',
  imports: [],
  templateUrl: './infobox.html',
  styleUrl: './infobox.css'
})

export class Infobox {
  image = input.required<string>();
  icon = input.required<string>();
  title = input.required<string>();
  description = input.required<string>();
}
