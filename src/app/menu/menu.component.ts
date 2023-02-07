import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  isShown: boolean = true;
  toggleMenu(): void {
    this.isShown=!this.isShown;
  }
}
