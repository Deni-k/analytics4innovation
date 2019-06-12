import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Start',
      url: '/start',
      icon: ''
    },
    {
      title: 'Kompetenz',
      url: '/kompetenz',
      icon: ''
    },
    {
      title: 'Daten',
      url: '/daten',
      icon: ''
    },
    {
      title: 'SE Toolbox',
      url: '/setoolbox',
      icon: ''
    },
    {
      title: 'BA Methoden',
      url: '/bamethoden',
      icon: ''
    },
    {
      title: 'Leitfaden',
      url: '/leitfaden',
      icon: ''
    },
    {
      title: 'Workflow',
      url: '/workflow',
      icon: ''
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
