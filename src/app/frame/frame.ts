import { Component, input } from '@angular/core';
import { Navbar } from '../navbar/navbar';

@Component({
  selector: 'app-frame',
  imports: [Navbar],
  templateUrl: './frame.html',
  styleUrl: './frame.css'
})
export class Frame {
  image = input.required<string>();
}
