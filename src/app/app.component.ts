import { NgtVector3 } from '@angular-three/core';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent{
  title = 'angular-threejs-rooms';



  private speed: number = 0.2;



  @HostListener('document:keydown', ['$event'])

  handleKeyboardEvent(event: KeyboardEvent) {

    if (event.key == 'w') {

      this.positionX -= this.speed;

    } else if (event.key == 's') {

      this.positionX += this.speed;

    } else if (event.key == 'a') {

      this.positionZ += this.speed;

    } else if (event.key == 'd') {

      this.positionZ -= this.speed;

    }
    

  }



  positionX: number = 10;

  positionY: number = 10;

  positionZ: number = 10;

}
