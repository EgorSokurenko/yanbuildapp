import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
   isMobile: boolean;
   isOpen: boolean = false; 

  constructor() {
    this.checkScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.checkScreenSize();
   }
   
   @HostListener('window:scroll', ['$event'])
  onScroll(event) {
    if (window.scrollX > 0) { // перевірка, чи прокрутка відбувається вліво
      this.isOpen = false; // закриваємо модальне вікно
    }
  }

  checkScreenSize() {
    this.isMobile = window.innerWidth < 800;
   }
   
 openMenu() {
    this.isOpen = !this.isOpen;
  }
}
