import { Component } from '@angular/core';
import { Frame } from '../frame/frame';
import { Infobox } from '../infobox/infobox';

@Component({
  selector: 'app-home-page',
  imports: [Frame, Infobox],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css'
})
export class HomePage {

}
