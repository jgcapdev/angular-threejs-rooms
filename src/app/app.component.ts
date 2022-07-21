import { Component, ElementRef, QueryList, ViewChild } from '@angular/core';
import { Color } from 'three';
import * as dat from 'dat.gui';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';

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
export interface AdamGLTF extends GLTF {
  nodes: {
    [key in 'EyeLeft' | 'EyeRight' | 'Wolf3D_Body' | 'Wolf3D_Glasses' | 'Wolf3D_Hair' | 'Wolf3D_Head' | 'Wolf3D_Teeth'| 'Wolf3D_Outfit_Bottom' | 'Wolf3D_Outfit_Footwear' | 'Wolf3D_Outfit_Top']: THREE.Mesh;
  };
  materials: {
    [key in 'Wolf3D_Eye' | 'Wolf3D_Body' | 'Wolf3D_Glasses' | 'Wolf3D_Hair' | 'Wolf3D_Skin' | 'Wolf3D_Outfit_Bottom' | 'Wolf3D_Outfit_Footwear' | 'Wolf3D_Outfit_Top'| 'Wolf3D_Teeth']: THREE.MeshStandardMaterial;
  };
}
