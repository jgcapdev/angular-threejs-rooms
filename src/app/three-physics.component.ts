import {
  NgtPhysicBody,
  NgtPhysicsModule,
  VectorApi,
} from '@angular-three/cannon';
import { NgtCanvasModule, NgtTriple } from '@angular-three/core';
import {
  NgtColorAttributeModule,
  NgtVector2AttributeModule,
} from '@angular-three/core/attributes';
import {
  NgtBoxGeometryModule,
  NgtPlaneGeometryModule,
} from '@angular-three/core/geometries';
import {
  NgtAmbientLightModule,
  NgtDirectionalLightModule,
} from '@angular-three/core/lights';
import {
  NgtMeshLambertMaterialModule,
  NgtShadowMaterialModule,
} from '@angular-three/core/materials';
import { NgtMeshModule } from '@angular-three/core/meshes';
import { NgtStatsModule } from '@angular-three/core/stats';
import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  Input,
  NgModule,
} from '@angular/core';

@Component({
  selector: 'sandbox-physic-cubes',
  template: `
    <ngt-canvas
      initialLog
      shadows
      [dpr]="[1, 2]"
      [gl]="{ alpha: true }"
      [camera]="{ position: [-4, 10, 15], fov: 60 }"
    >
      <ngt-color attach="background" color="lightblue"></ngt-color>
      <ngt-ambient-light></ngt-ambient-light>
      <ngt-directional-light [position]="10" castShadow>
        <ngt-vector2
          [attach]="['shadow', 'mapSize']"
          [vector2]="2048"
        ></ngt-vector2>
      </ngt-directional-light>

      <ngt-physics>
        <sandbox-plane [position]="[-8, -10.5, -8]"></sandbox-plane>
        <sandbox-plane [position]="[-3, -1.5, 0]"></sandbox-plane>
        <!-- <sandbox-plane [position]="[-3, 1.5, -3]" [wall]="true"></sandbox-plane> -->
        <!-- <sandbox-plane [position]="[0, -3.5, 0]" [wall]="true" [color]="'#ff0000'"></sandbox-plane> -->
        <sandbox-cube
          [position]="[0.1, 5, 0]"
          [controllable]="true"
        ></sandbox-cube>
        <sandbox-cube [position]="[0, 10, -1]"></sandbox-cube>
        <sandbox-cube
          [position]="[0, 2, -2]"
          [fixedCube]="true"
        ></sandbox-cube>
      </ngt-physics>
    </ngt-canvas>
    <ngt-stats></ngt-stats>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SandboxPhysicCubesComponent {
  constructor() {}
}

@Component({
  selector: 'sandbox-plane',
  template: `
    <ngt-mesh
      receiveShadow
      [ref]="planeRef.ref"
      [position]="position"
      [rotation]="rotation"
    >
      <ngt-plane-geometry [args]="[40, 40]"></ngt-plane-geometry>
      <ngt-shadow-material
        [transparent]="true"
        [opacity]="0.4"
      ></ngt-shadow-material>
      <ngt-mesh-lambert-material color="red"></ngt-mesh-lambert-material>
    </ngt-mesh>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [NgtPhysicBody],
})
export class SandboxPlaneComponent {
  @Input() position?: NgtTriple;
  @Input() color: string = '#171717';
  @Input() wall: boolean = false;
  @Input() mass: number = 0;

  rotation = [-Math.PI / 2, 0, 0] as NgtTriple;

  planeRef = this.physicBody.usePlane(() => ({
    args: [40, 40],
    rotation: this.rotation,
    position: this.position,
  }));

  constructor(private physicBody: NgtPhysicBody) {}
}

@Component({
  selector: 'sandbox-cube',
  template: `
    <ngt-mesh
      receiveShadow
      castShadow
      [ref]="boxRef.ref"
      [position]="position"
      [rotation]="rotation"
    >
      <ngt-box-geometry></ngt-box-geometry>
      <ngt-mesh-lambert-material color="tomato"></ngt-mesh-lambert-material>
    </ngt-mesh>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [NgtPhysicBody],
})
export class SandboxCubeComponent {
  @Input() position!: NgtTriple;
  @Input() controllable: boolean = false;
  @Input() mass: number = 0.1;
  @Input() fixedCube: boolean = false;

  private speed: number = 0.2;
  rotation = [0, 0, 0] as NgtTriple;
  boxRef = this.physicBody.useBox(() => ({
    mass: this.mass,
    position: this.position,
    rotation: this.rotation,
    onCollide(e) {
      if (e.body.id === 18 && e.target.id === 19) {
        console.log('avatar touched cube 1');
      }
    },
  }));

  ngOnInit() {
    if (this.fixedCube) {
      this.rotation = [0.4, 0.2, 0.5] as NgtTriple;
    }
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key == 'd') {
      this.position[0] += this.speed;
      this.moveCube(this.position);
    } else if (event.key == 'w') {
      this.position[2] -= this.speed;
      this.moveCube(this.position);
    } else if (event.key == 'a') {
      this.position[0] -= this.speed;
      this.moveCube(this.position);
    } else if (event.key == 's') {
      this.position[2] += this.speed;
      this.moveCube(this.position);
    }
  }

  moveCube(position: any) {
    this.boxRef.api.position.subscribe((pos) => {
      if (this.position && this.controllable) {
        this.boxRef.api.position.set(position[0], pos[1], position[2]);
      }
    });
  }

  constructor(private physicBody: NgtPhysicBody) {}
}

@NgModule({
  declarations: [
    SandboxPhysicCubesComponent,
    SandboxPlaneComponent,
    SandboxCubeComponent,
  ],
  exports: [SandboxPhysicCubesComponent, SandboxPlaneComponent],
  imports: [
    CommonModule,
    NgtCanvasModule,
    NgtColorAttributeModule,
    NgtAmbientLightModule,
    NgtDirectionalLightModule,
    NgtVector2AttributeModule,
    NgtPhysicsModule,
    NgtMeshModule,
    NgtPlaneGeometryModule,
    NgtShadowMaterialModule,
    NgtBoxGeometryModule,
    NgtMeshLambertMaterialModule,
    NgtStatsModule,
  ],
})
export class SandboxPhysicCubesModule {}
