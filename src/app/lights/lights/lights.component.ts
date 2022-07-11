import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lights',
  templateUrl: './lights.component.html',
  styleUrls: ['./lights.component.css'],
})
export class LightsComponent implements OnInit {
  @Input() setLights?: boolean;

  constructor() {}

  ngOnInit(): void {}
}
