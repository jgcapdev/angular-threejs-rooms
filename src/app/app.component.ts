import { Component, Input } from '@angular/core';
import { Color } from 'three';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  background = new Color('lightblue');
  positionX: number = 0;
  positionY: number = 0;
  positionZ: number = 10;
  private speed: number = 0.2;

  title = 'angular-threejs-rooms';

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key == 'w') {
      this.positionZ += this.speed;
    } else if (event.key == 's') {
      this.positionZ -= this.speed;
    } else if (event.key == 'a') {
      this.positionX -= this.speed;
    } else if (event.key == 'd') {
      this.positionX += this.speed;
    }
  }
}
