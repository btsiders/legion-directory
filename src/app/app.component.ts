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
      url: '/Home',
      icon: 'mail'
    },
    {
      title: 'Garrisons',
      url: '/Garrisons',
      icon: 'paper-plane'
    },
    {
      title: 'Detachments',
      url: '/Detachments',
      icon: 'heart'
    },
    {
      title: 'Members',
      url: '/Members',
      icon: 'archive'
    },
    {
      title: 'Verify',
      url: '/Verify',
      icon: 'trash'
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
