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
      title: 'Inbox',
      url: '/Inbox',
      icon: 'mail'
    },
    {
      title: 'Outbox',
      url: '/Outbox',
      icon: 'paper-plane'
    },
    {
      title: 'Favorites',
      url: '/Favorites',
      icon: 'heart'
    },
    {
      title: 'Archived',
      url: '/Archived',
      icon: 'archive'
    },
    {
      title: 'Trash',
      url: '/Trash',
      icon: 'trash'
    },
    {
      title: 'Spam',
      url: '/Spam',
      icon: 'warning'
    }
  ];

  constructor() { }

  ngOnInit() {
    const path = window.location.pathname.toLowerCase();
    if (path) {
      this.selectedIndex = this.appPages.findIndex(page => page.url.toLowerCase() === path);
    }
  }
}
