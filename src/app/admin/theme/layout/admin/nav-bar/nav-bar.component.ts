import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { NextConfig } from 'src/app/app-config';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  public nextConfig: any;
  public menuClass: boolean;
  public collapseStyle: string;

  @Output() onNavCollapse = new EventEmitter();
  @Output() onNavHeaderMobCollapse = new EventEmitter();

  constructor() {
    this.nextConfig = NextConfig.config;
    this.menuClass = false;
    this.collapseStyle = 'none';
  }

  ngOnInit() { }

  toggleMobOption() {
    this.menuClass = !this.menuClass;
    this.collapseStyle = (this.menuClass) ? 'block' : 'none';
  }

  navCollapse() {
    if (window.innerWidth >= 992) {
      this.onNavCollapse.emit();
    } else {
      this.onNavHeaderMobCollapse.emit();
    }
  }

}
