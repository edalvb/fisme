import { Component, HostListener, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  darkTheme = false;
  public innerWidth: any;
  resize_sm: boolean;
  resize_xs: boolean;

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    this.onResize();
  }

  constructor(private breakpointObserver: BreakpointObserver, public location: Location, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'logo-fisme',
      sanitizer.bypassSecurityTrustResourceUrl(`/assets/img/logo.svg`))
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    this.innerWidth = window.innerWidth;
    console.log(this.innerWidth);
    if (this.innerWidth < 640) {
      this.resize_xs = true;
      this.resize_sm = true;
    } else if (this.innerWidth < 768) {
      this.resize_xs = true;
      this.resize_sm = false;
    }
    else {
      this.resize_xs = false;
      this.resize_sm = false;
    }
  }
}
