import { NgtEuler, NgtVector3 } from '@angular-three/core';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-floor',
  templateUrl: './floor.component.html',
  styleUrls: ['./floor.component.css'],
})
export class FloorComponent implements OnInit {
  @Input() position?: NgtVector3;
  @Input() rotation?: NgtEuler;

  constructor() {}

  ngOnInit(): void {}
}
