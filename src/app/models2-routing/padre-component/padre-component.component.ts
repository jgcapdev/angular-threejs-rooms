import { NgtRenderState } from '@angular-three/core';
import { Component, OnInit } from '@angular/core';
import { Mesh } from 'three';

@Component({
  selector: 'app-padre-component',
  templateUrl: './padre-component.component.html',
  styleUrls: ['./padre-component.component.css']
})
export class PadreComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onCubeBeforeRender($event: { state: NgtRenderState; object: Mesh }) {
    const cube = $event.object;
    // we are rotating our cube little by little before it gets rendered
    cube.rotation.x += 0.01;
  }
}
