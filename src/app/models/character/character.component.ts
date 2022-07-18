import { NgtPhysicBody } from '@angular-three/cannon';
import { NgtRenderState, NgtTriple, NgtVector3 } from '@angular-three/core';
import { Component, HostListener, Input, OnInit } from '@angular/core';
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
  @Input() position!: NgtTriple;
  @Input() wireframe?: boolean;
  @Input() mass: number = 0.1;
  @Input() controllable: boolean = false;
  private speed: number = 0.2;
  rotation = [0, 0, 0] as NgtTriple;
  private coins: any = [];
  cryptos$: Observable<any> = new Observable();

  sphereRef = this.physicBody.useSphere(() => ({
    mass: 1,
    position: this.position,
    rotation: this.rotation,
    onCollide(e) {
      console.log(e);
    },
  }));
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

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key == 'w') {
      this.position[2] -= this.speed;
      this.moveCharacter(this.position);
    } else if (event.key == 's') {
      this.position[2] += this.speed;
      this.moveCharacter(this.position);
    } else if (event.key == 'a') {
      this.position[0] -= this.speed;
      this.moveCharacter(this.position);
    } else if (event.key == 'd') {
      this.position[0] += this.speed;
      this.moveCharacter(this.position);

    }
  }

  moveCharacter(position: any) {
    this.sphereRef.api.position.subscribe((pos) => {
      if (this.position && this.controllable) {
        this.sphereRef.api.position.set(position[0], pos[1], position[2]);
      }
    });
  }
}
