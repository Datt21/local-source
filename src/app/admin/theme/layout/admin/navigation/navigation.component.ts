import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { NextConfig } from 'src/app/app-config';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  public nextConfig: any;
  @Output() onNavMobCollapse = new EventEmitter();

  constructor() {
    this.nextConfig = NextConfig.config;
  }

  async ngOnInit() {
   }

  navMobCollapse() {
    if (window.innerWidth < 992) {
      this.onNavMobCollapse.emit();
    }
  }
}
