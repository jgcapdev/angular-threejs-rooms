import {
  NgtRenderState,
  NgtVector3,
  NgtLoader,
  NgtTriple,
} from '@angular-three/core';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Mesh } from 'three';
import * as THREE from 'three';
import { NgtTextureLoader } from '@angular-three/soba/loaders';
import { NgtPhysicBody } from '@angular-three/cannon';

@Component({
  selector: 'app-standard-room',
  templateUrl: './standard-room.component.html',
  styleUrls: ['./standard-room.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [NgtLoader, NgtTextureLoader, NgtPhysicBody],
})
export class StandardRoomComponent implements OnInit {
  @Input() position!: NgtTriple;
  @Input() args!: NgtTriple;
  @Input() scale!: NgtVector3;
  @Input() wireframe!: boolean;

  boxRef = this.physicBody.useBox(() => ({
    position: this.position,
    args:this.args,
    mass:0.1
    
  }));

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

  constructor(
    private textureLoader: NgtTextureLoader,
    private physicBody: NgtPhysicBody
  ) {}

  ngOnInit(): void {}

  hovered = false;
  hovered1 = false;
  hovered2 = false;
  active = false;

  onCubeBeforeRender($event: { state: NgtRenderState; object: Mesh }) {
    const cube = $event.object;
  }

 
}
