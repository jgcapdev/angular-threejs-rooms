import { NgtVector3 } from '@angular-three/core';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @Input() position?: NgtVector3;
  title = 'angular-threejs-rooms';
}
