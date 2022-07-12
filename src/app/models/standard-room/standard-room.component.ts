import { NgtRenderState, NgtVector3 } from '@angular-three/core';
import { NgtBoxGeometry } from '@angular-three/core/geometries';
import { Component, Input, OnInit } from '@angular/core';
import { Mesh } from 'three';
import * as THREE from 'three';

@Component({
  selector: 'app-standard-room',
  templateUrl: './standard-room.component.html',
  styleUrls: ['./standard-room.component.css'],
})
export class StandardRoomComponent implements OnInit {
  @Input() position?: NgtVector3;
  @Input() args?: any;
  @Input() scale?: NgtVector3;
  @Input() wireframe?: boolean;

  size: any = THREE.DoubleSide;

  transparents = ['true', 'false', 'true', 'false', 'true', 'false'];

  constructor() {}

  ngOnInit(): void {}

  hovered = false;
  hovered1 = false;
  hovered2 = false;
  active = false;

  onCubeBeforeRender($event: { state: NgtRenderState; object: Mesh }) {
    const cube = $event.object;
  }
}
