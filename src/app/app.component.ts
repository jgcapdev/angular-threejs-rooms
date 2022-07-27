import { Component, ElementRef, QueryList, ViewChild } from '@angular/core';
import { Color } from 'three';
import * as dat from 'dat.gui';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import { Observable } from 'rxjs';
import { AppState } from './state/app.state';
import { Store } from '@ngrx/store';
import { selectMsg } from './state/selectors/cryptos.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  
  @ViewChild('text', { read: ElementRef }) divText?: ElementRef;
 
  text$: Observable<any> = new Observable();
  
  background = new Color('lightblue');

  // gui: dat.GUI = new dat.GUI();

  title = 'angular-threejs-rooms';

  constructor(private store: Store<AppState>,) {}

  ngOnInit(): void {
    this.text$ = this.store.select(selectMsg);
    
  }

  ngAfterViewInit() {
    // console.log(this.divText?.nativeElement.attributes);
  }
  
  /*funcion(){
   
      (this.text$).subscribe(data => {
        this.msgIndi = data
    });
    
    return this.msgIndi
  }*/
  }

export interface AdamGLTF extends GLTF {
  nodes: {
    [key in 'EyeLeft' | 'EyeRight' | 'Wolf3D_Body' | 'Wolf3D_Glasses' | 'Wolf3D_Hair' | 'Wolf3D_Head' | 'Wolf3D_Teeth'| 'Wolf3D_Outfit_Bottom' | 'Wolf3D_Outfit_Footwear' | 'Wolf3D_Outfit_Top']: THREE.Mesh;
  };
  materials: {
    [key in 'Wolf3D_Eye' | 'Wolf3D_Body' | 'Wolf3D_Glasses' | 'Wolf3D_Hair' | 'Wolf3D_Skin' | 'Wolf3D_Outfit_Bottom' | 'Wolf3D_Outfit_Footwear' | 'Wolf3D_Outfit_Top'| 'Wolf3D_Teeth']: THREE.MeshStandardMaterial;
  };
}
export interface SillonGLTF extends GLTF {
  nodes: {
    [key in 'wall' | 'floor' | 'rug' | 'couch' | 'cushon' | 'pillow']: THREE.Mesh;
  };
  materials: {
    [key in 'Material'| 'Material']: THREE.MeshStandardMaterial;
  };
}