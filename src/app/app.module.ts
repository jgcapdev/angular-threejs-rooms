// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';

// Configs
import { environment } from '../environments/environment';

// Components
import { AppComponent } from './app.component';
import { StandardRoomComponent } from './models/standard-room/standard-room.component';
import { CharacterComponent } from './models/character/character.component';
import { LightsComponent } from './lights/lights/lights.component';
import { FloorComponent } from './models/floor/floor.component';

// NgRx
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { cryptosReducer, msgReducer } from './state/reducers/cryptos.reducer';
import { CryptosEffects } from './state/effects/cryptos.effects';

// Angular Three
import {
  NgtCanvasModule,
  NgtColorPipeModule,
  NgtFogPipeModule,
  NgtPiPipeModule,
} from '@angular-three/core';
import {
  NgtAxesHelperModule,
  NgtCameraHelperModule,
} from '@angular-three/core/helpers';
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
import { NgtMeshModule , NgtInstancedMeshModule} from '@angular-three/core/meshes';
import { NgtSobaTextModule } from '@angular-three/soba/abstractions';
import { NgtValueAttributeModule } from '@angular-three/core/attributes';
import {
  NgtSobaEnvironmentModule,
  NgtSobaSkyModule,
} from '@angular-three/soba/staging';
import {
  NgtSobaGizmoHelperModule,
  NgtSobaGizmoViewcubeModule,
} from '@angular-three/soba/abstractions';
import { NgtPhysicsModule } from '@angular-three/cannon';
import { NgtPrimitiveModule } from '@angular-three/core/primitive';
import { NgtGroupModule } from '@angular-three/core/group';
import { SillonGLTFComponent } from './models/sillon-gltf/sillon-gltf.component';


@NgModule({
  declarations: [
    AppComponent,
    StandardRoomComponent,
    CharacterComponent,
    LightsComponent,
    FloorComponent,
    SillonGLTFComponent,
   

  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ cryptos: cryptosReducer, msg:msgReducer }),
    EffectsModule.forRoot([CryptosEffects]),
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
    NgtPrimitiveModule,
    
    NgtSpotLightModule,
    NgtPointLightModule,
    NgtDirectionalLightModule,
    NgtSobaFirstPersonControlsModule,
    NgtSobaOrbitControlsModule,
    NgtStatsModule,
    NgtMeshModule,
    NgtColorPipeModule,
    NgtFogPipeModule,
    NgtCameraHelperModule,
    NgtSobaTextModule,
    NgtInstancedMeshModule,
    NgtPiPipeModule,
    HttpClientModule,
    NgtValueAttributeModule,
    NgtSobaEnvironmentModule,
    NgtSobaSkyModule,
    NgtSobaGizmoHelperModule,
    NgtGroupModule,
    NgtSobaGizmoViewcubeModule,
    NgtPhysicsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
