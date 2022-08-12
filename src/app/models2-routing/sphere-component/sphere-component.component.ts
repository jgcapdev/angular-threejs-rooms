import { NgtRenderState, NgtVector3 } from '@angular-three/core';
import { Component, Input, OnInit } from '@angular/core';
import { Mesh } from 'three';

@Component({
  selector: 'app-sphere-component',
  templateUrl: './sphere-component.component.html',
  styleUrls: ['./sphere-component.component.css']
})
export class SphereComponentComponent implements OnInit {
  @Input('position') position?: NgtVector3;
  hovered = false;
  active = false;
  constructor() { }

  ngOnInit(): void {
  }
  onSphereBeforeRender($event: { state: NgtRenderState; object: Mesh }) {
    const sphere = $event.object;
    sphere.rotation.x += 0.01;
  }
}