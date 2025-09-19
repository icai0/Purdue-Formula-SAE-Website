import { Component, HostListener } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  constructor(){
  }

  ngOnInit(): void {
    window.addEventListener('scroll', this.scroll, true)
  }

  scroll = (): void => {
    if(window.scrollY >= 10){
      document.body.style.setProperty('--navbar-color', "black");
    } else{
      document.body.style.setProperty('--navbar-color', "transparent");
    }
  }
}
