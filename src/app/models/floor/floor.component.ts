import { NgtEuler, NgtVector3, NgtLoader } from '@angular-three/core';
import { Component, OnInit, Input } from '@angular/core';
import { NgtTextureLoader } from '@angular-three/soba/loaders';
import { MeshStandardMaterialParameters, Texture, TextureLoader } from 'three';
import * as THREE from 'three';

@Component({
  selector: 'app-floor',
  templateUrl: './floor.component.html',
  styleUrls: ['./floor.component.css'],
  providers: [NgtTextureLoader],
})
export class FloorComponent implements OnInit {
  @Input() position?: NgtVector3;
  @Input() rotation?: NgtEuler;

  constructor(
    private textureLoader: NgtTextureLoader,
    private loader: NgtLoader
  ) {}

  ngOnInit(): void {}

  texture!: Texture;
  textureNormal!: Texture;
  textureAo!: Texture;
  textureRn!: Texture;

  texture$ = this.loader
    .use(TextureLoader, 'assets/grass/color.jpg')
    .subscribe((text) => {
      text.wrapS = THREE.RepeatWrapping;
      text.wrapT = THREE.RepeatWrapping;
      text.repeat.set(8, 8);

      this.texture = text;
    });

  textureNormal$ = this.loader
    .use(TextureLoader, 'assets/grass/normal.jpg')
    .subscribe((text) => {
      text.wrapS = THREE.RepeatWrapping;
      text.wrapT = THREE.RepeatWrapping;
      text.repeat.set(8, 8);

      this.textureNormal = text;
    });

  textureAo$ = this.loader
    .use(TextureLoader, 'assets/grass/ambientOcclusion.jpg')
    .subscribe((text) => {
      text.wrapS = THREE.RepeatWrapping;
      text.wrapT = THREE.RepeatWrapping;
      text.repeat.set(8, 8);
    });

  textureRoughness = this.loader
    .use(TextureLoader, 'assets/grass/roughness.jpg')
    .subscribe((text) => {
      text.wrapS = THREE.RepeatWrapping;
      text.wrapT = THREE.RepeatWrapping;
      text.repeat.set(8, 8);
    });

  get parameters(): MeshStandardMaterialParameters {
    const p: MeshStandardMaterialParameters = {};

    p.map = this.texture;
    p.aoMap = this.textureAo;
    p.normalMap = this.textureNormal;
    p.roughnessMap = this.textureRn;

    return p;
  }
}
