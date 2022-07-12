import { Component, ElementRef, QueryList, ViewChild } from '@angular/core';
import { Color } from 'three';
import { HostListener } from '@angular/core';
import { NgtSobaText } from '@angular-three/soba/abstractions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('text', { read: ElementRef }) divText?: QueryList<ElementRef>;

  background = new Color('lightblue');
  positionX: number = 10;
  positionY: number = 10;
  positionZ: number = 10;
  private speed: number = 0.2;

  title = 'angular-threejs-rooms';

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    console.log(this.divText);
  }

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
    } else if (event.key == 'e') {
      this.positionY -= this.speed;
    } else if (event.key == 'r') {
      this.positionY += this.speed;
    }
  }
}
