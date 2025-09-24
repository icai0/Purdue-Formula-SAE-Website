import { Component, input } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-frame',
  imports: [Navbar, Footer],
  templateUrl: './frame.html',
  styleUrl: './frame.css'
})
export class Frame {
  image = input.required<string>();
}
