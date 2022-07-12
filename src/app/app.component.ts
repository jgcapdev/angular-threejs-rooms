import { Component, Input } from '@angular/core';
import { Color } from 'three';
import { HostListener } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './state/app.state';
import { loadCryptos } from './state/actions/crypto.actions';
import { selectListCryptos } from './state/selectors/cryptos.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  background = new Color('lightblue');
  positionX: number = 0;
  positionY: number = 0;
  positionZ: number = 10;
  private speed: number = 0.2;

  cryptos$: Observable<any> = new Observable();

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(loadCryptos());
    this.cryptos$ = this.store.select(selectListCryptos);
  }

  title = 'angular-threejs-rooms';

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key == 'w') {
      this.positionZ += this.speed;
    } else if (event.key == 's') {
      this.positionZ -= this.speed;
    } else if (event.key == 'a') {
      this.positionX -= this.speed;
    } else if (event.key == 'd') {
      this.positionX += this.speed;
    }
  }
}
