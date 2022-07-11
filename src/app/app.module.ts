// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Configs
import { environment } from '../environments/environment';

// Components
import { AppComponent } from './app.component';
import { Room1Component } from './Rooms/Room1/room1.component';

// NgRx
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// Angular Three
import { NgtCanvasModule } from '@angular-three/core';
import { NgtAxesHelperModule } from '@angular-three/core/helpers';
import {
  NgtBoxGeometryModule,
  NgtConeGeometryModule,
  NgtPlaneGeometryModule,
  NgtSphereGeometryModule,
} from '@angular-three/core/geometries';
import {
  NgtMeshBasicMaterialModule,
  NgtMeshStandardMaterialModule,
} from '@angular-three/core/materials';
import {
  NgtAmbientLightModule,
  NgtSpotLightModule,
  NgtPointLightModule,
  NgtDirectionalLightModule,
} from '@angular-three/core/lights';
import {
  NgtSobaFirstPersonControlsModule,
  NgtSobaOrbitControlsModule,
} from '@angular-three/soba/controls';
import { NgtStatsModule } from '@angular-three/core/stats';
import { NgtMeshModule } from '@angular-three/core/meshes';
import { SphereComponent } from './Objects/Sphere/sphere/sphere.component';


@NgModule({
  declarations: [AppComponent, Room1Component, SphereComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    NgtCanvasModule,
    NgtAxesHelperModule,
    NgtBoxGeometryModule,
    NgtConeGeometryModule,
    NgtPlaneGeometryModule,
    NgtSphereGeometryModule,
    NgtMeshBasicMaterialModule,
    NgtMeshStandardMaterialModule,
    NgtAmbientLightModule,
    NgtSpotLightModule,
    NgtPointLightModule,
    NgtDirectionalLightModule,
    NgtSobaFirstPersonControlsModule,
    NgtSobaOrbitControlsModule,
    NgtStatsModule,
    NgtMeshModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
