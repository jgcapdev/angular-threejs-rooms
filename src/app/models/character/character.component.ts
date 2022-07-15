import { NgtPhysicBody } from '@angular-three/cannon';
import { NgtRenderState, NgtTriple, NgtVector3 } from '@angular-three/core';
import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CryptoService } from 'src/app/services/crypto.service';
import { loadCryptos } from 'src/app/state/actions/crypto.actions';
import { AppState } from 'src/app/state/app.state';
import { selectListCryptos } from 'src/app/state/selectors/cryptos.selectors';
import { Mesh } from 'three';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css'],
  providers: [NgtPhysicBody],
})
export class CharacterComponent implements OnInit {
  @Input() scale?: NgtVector3;
  @Input() position?: NgtTriple;
  @Input() wireframe?: boolean;

  private coins: any = [];
  cryptos$: Observable<any> = new Observable();

  constructor(
    private cryptoService: CryptoService,
    private store: Store<AppState>,
    private physicBody: NgtPhysicBody
  ) {}
  ngOnInit(): void {}

  hovered = false;
  hovered1 = false;
  hovered2 = false;
  active = false;

  onCubeBeforeRender($event: { state: NgtRenderState; object: Mesh }) {
    const sphere = $event.object;
  }

  getAllCoins() {
    this.store.dispatch(loadCryptos());
    this.cryptos$ = this.store.select(selectListCryptos);
  }

  sphereRef = this.physicBody.useSphere(() => ({
    args: [1],
    position: this.position,
  }));
}
