import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  // transparent to black transition
  pastThreshold = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.pastThreshold = window.scrollY > 50;
  }
}
