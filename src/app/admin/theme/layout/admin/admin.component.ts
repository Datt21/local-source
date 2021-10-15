import { ChangeDetectorRef, Component, HostListener, OnInit } from '@angular/core';
import { NextConfig } from 'src/app/app-config';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  public nextConfig: any;
  public navCollapsed: boolean;
  public navCollapsedMob: boolean;
  public windowWidth: number;
  public hasBreadcrumb = true;

  constructor(
    private cdr: ChangeDetectorRef
  ) {
    this.nextConfig = NextConfig.config;
    this.initNav();
  }

  initNav(): void {
    this.windowWidth = window.innerWidth;

    this.navCollapsed = (this.windowWidth >= 992) ? this.nextConfig.collapseMenu : false;
    this.navCollapsedMob = false;
  }

  ngOnInit() {
    if (this.windowWidth < 992) {
      this.nextConfig.layout = 'vertical';
      setTimeout(() => {
        document.querySelector('.pcoded-navbar').classList.add('menupos-static');
        (document.querySelector('#nav-ps-next') as HTMLElement).style.maxHeight = '100%'; // 100% amit
      }, 500);
    }
  }

  navMobClick() {
    if (this.windowWidth < 992) {
      if (this.navCollapsedMob && !(document.querySelector('app-navigation.pcoded-navbar').classList.contains('mob-open'))) {
        this.navCollapsedMob = !this.navCollapsedMob;
        setTimeout(() => {
          this.navCollapsedMob = !this.navCollapsedMob;
        }, 100);
      } else {
        this.navCollapsedMob = !this.navCollapsedMob;
      }
    }
  }

  changeStateBreadcrumb(state): void {
    this.hasBreadcrumb = state;
    this.cdr.detectChanges();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.initNav();
    this.ngOnInit();
  }

}
