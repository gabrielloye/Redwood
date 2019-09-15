import { Component, ViewChild, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { faBars, faHome, faChartBar, faNewspaper, faCog, faUsers } from '@fortawesome/free-solid-svg-icons';
import { faCompass } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit {
  @ViewChild('rightSidenav', {static: false})rightSidenav
  @ViewChild('drawer', {static: false})drawer
  faBars = faBars;
  faHome = faHome;
  faChartBar = faChartBar;
  faCompass = faCompass;
  faCog = faCog;
  faNewspaper = faNewspaper;
  faUsers = faUsers;
  leftSideOpen: boolean = true;
  rightSideOpen: boolean = true;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches)
  );
  isHandset: Boolean;

  constructor(private breakpointObserver: BreakpointObserver, private router: Router){}

  public ngOnInit() {
    this.isHandset$.subscribe(res=>{
      if(res) {
        this.leftSideOpen = false;
        this.rightSideOpen = false;
        this.isHandset = true;
      }
    })
  }

  OpenLeftNav() {
    this.leftSideOpen = !this.leftSideOpen
  }

  openRightNav() {
    this.rightSideOpen = !this.rightSideOpen
  }

  navigate(route) {
    this.router.navigate([`/${route}`])
    if (this.isHandset){
      this.drawer.close()
      this.leftSideOpen = false;
    }
  }
}
