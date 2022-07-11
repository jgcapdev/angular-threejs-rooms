import { NgtRenderState, NgtVector3 } from '@angular-three/core';
import { Component, Input, OnInit } from '@angular/core';
import * as THREE from 'three';
import { Mesh } from 'three';

@Component({
  selector: 'app-room1',
  templateUrl: './room1.component.html',
  styleUrls: ['./room1.component.css']
})
export class Room1Component implements OnInit  {
 

  constructor() { }

  ngOnInit(): void {
  }
  @Input() position?: NgtVector3;
  

  hovered = false;
  hovered1 = false;
  hovered2=false
  active = false;
  

  
  onCubeBeforeRender($event: { state: NgtRenderState; object: Mesh }) {
    const cube = $event.object;
    
    
  }

 

}
