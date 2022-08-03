import { NgtRenderState, NgtVector3 } from '@angular-three/core';
import { Component, Input, OnInit } from '@angular/core';
import { Mesh } from 'three';

@Component({
  selector: 'app-cube-componet',
  templateUrl: './cube-componet.component.html',
  styleUrls: ['./cube-componet.component.css']
})
export class CubeComponetComponent implements OnInit {
  @Input('position') position?: NgtVector3;
  hovered = false;
  active = false;
  constructor() { }

  ngOnInit(): void {
  }
  onCubeBeforeRender($event: { state: NgtRenderState; object: Mesh }) {
    const cube = $event.object;
    cube.rotation.x += 0.01;
  }
}
