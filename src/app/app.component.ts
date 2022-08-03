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
}