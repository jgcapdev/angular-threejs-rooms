import { NgtVector3 } from '@angular-three/core';
import { Component, Input } from '@angular/core';
import { Color } from 'three';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  background = new Color('lightblue');

  title = 'angular-threejs-rooms';
}
