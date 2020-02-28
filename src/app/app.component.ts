import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Units (Garrisons & Outposts)',
      url: '/garrisons',
      icon: 'map'
    },
    {
      title: 'Detachments',
      url: '/detachments',
      icon: 'people-circle'
    },
    {
      title: 'Members',
      url: '/members',
      icon: 'people'
    },
    {
      title: 'Verify',
      url: '/verify',
      icon: 'shield-checkmark'
    },
  ];

  constructor() { }

  ngOnInit() {
    const path = window.location.pathname.toLowerCase();
    if (path) {
      this.selectedIndex = this.appPages.findIndex(page => page.url.toLowerCase() === path);
    }
  }
}
