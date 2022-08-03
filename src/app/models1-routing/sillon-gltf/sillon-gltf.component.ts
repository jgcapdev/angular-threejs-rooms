import { NgtPhysicBody } from '@angular-three/cannon';
import { NgtRenderState, NgtTriple, NgtVector3 } from '@angular-three/core';
import { NgtGLTFLoader } from '@angular-three/soba/loaders';
import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SillonGLTF } from '../padre/padre.component'; 


import { AppState } from 'src/app/state/app.state';


@Component({
  selector: 'app-sillon-gltf',
  templateUrl: './sillon-gltf.component.html',
  styleUrls: ['./sillon-gltf.component.css'],
  providers: [NgtPhysicBody],
})
export class SillonGLTFComponent implements OnInit {
  @Input() position!: NgtTriple;
  @Input() args!: NgtTriple;
  readonly sillon$ = this.gltfLoader.load('assets/roomgood.glb') as unknown as Observable<SillonGLTF>;

  physi = this.physicBody.useBox(() => ({
    position:this.position,
    args:this.args,
    type:'Static',
    mass:0.1,
  
  }));
  constructor( private store: Store<AppState>,
    private physicBody: NgtPhysicBody,
    private gltfLoader: NgtGLTFLoader) { }

  ngOnInit(): void {
  }

}
