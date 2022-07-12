import { NgtRenderState, NgtVector3, NgtLoader } from '@angular-three/core';
import { Component, Input, OnInit } from '@angular/core';
import { Mesh } from 'three';
import * as THREE from 'three';
import { NgtTextureLoader } from '@angular-three/soba/loaders';

@Component({
  selector: 'app-standard-room',
  templateUrl: './standard-room.component.html',
  styleUrls: ['./standard-room.component.css'],
  providers: [NgtLoader, NgtTextureLoader],
})
export class StandardRoomComponent implements OnInit {
  @Input() position?: NgtVector3;
  @Input() args?: any;
  @Input() scale?: NgtVector3;
  @Input() wireframe?: boolean;

  readonly texture$ = this.textureLoader.load('assets/bricks/color.jpg');
  readonly textureAo$ = this.textureLoader.load(
    'assets/bricks/ambientOcclusion.jpg'
  );
  readonly textureNormal$ = this.textureLoader.load('assets/bricks/normal.jpg');
  readonly textureRoughness$ = this.textureLoader.load(
    'assets/bricks/roughness.jpg'
  );

  size: any = THREE.DoubleSide;
  transparents = ['true', 'false', 'true', 'false', 'true', 'false'];

  constructor(private textureLoader: NgtTextureLoader) {}

  ngOnInit(): void {}

  hovered = false;
  hovered1 = false;
  hovered2 = false;
  active = false;

  onCubeBeforeRender($event: { state: NgtRenderState; object: Mesh }) {
    const cube = $event.object;
  }
}
