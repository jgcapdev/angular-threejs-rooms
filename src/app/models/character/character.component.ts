import { NgtRenderState, NgtVector3 } from '@angular-three/core';
import { Component, Input, OnInit } from '@angular/core';
import { CryptoService } from 'src/app/services/crypto.service';
import { Mesh } from 'three';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css'],
})
export class CharacterComponent implements OnInit {
  @Input() scale?: NgtVector3;
  @Input() position?: NgtVector3;
  @Input() wireframe?: boolean;

  private coins: any = [];

  constructor(private cryptoService: CryptoService) {}
  ngOnInit(): void {}

  hovered = false;
  hovered1 = false;
  hovered2 = false;
  active = false;

  onCubeBeforeRender($event: { state: NgtRenderState; object: Mesh }) {
    const sphere = $event.object;
  }

  getAllCoins() {
    this.cryptoService.getMarkets().subscribe((res: any) => {
      this.coins = res;

      console.log(this.coins);
    });
  }
}
