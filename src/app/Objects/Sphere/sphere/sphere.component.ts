import { NgtRenderState, NgtVector3 } from '@angular-three/core';
import { Component, Input, OnInit } from '@angular/core';
import { Mesh } from 'three';

@Component({
  selector: 'app-sphere',
  templateUrl: './sphere.component.html',
  styleUrls: ['./sphere.component.css']
})
export class SphereComponent implements OnInit  {
 

  constructor() { }

  ngOnInit(): void {
  }
  @Input() position?: NgtVector3;
  

  hovered = false;
  hovered1 = false;
  hovered2=false
  active = false;
  

  
  onCubeBeforeRender($event: { state: NgtRenderState; object: Mesh }) {
    const sphere = $event.object;
    
    
  }

 

}
