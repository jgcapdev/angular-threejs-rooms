import { Component, ElementRef, QueryList, ViewChild } from '@angular/core';
import { Color } from 'three';
import * as dat from 'dat.gui';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('text', { read: ElementRef }) divText?: ElementRef;

  background = new Color('lightblue');

  // gui: dat.GUI = new dat.GUI();

  title = 'angular-threejs-rooms';

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    // console.log(this.divText?.nativeElement.attributes);
  }
}
