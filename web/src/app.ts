import { PLATFORM } from 'aurelia-pal';
import { Router, RouterConfiguration } from 'aurelia-router';

export class App {
  message: 'Hello World!';
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router): void {
    this.router = router;
    config.title = 'Jam Meetup';
    config.map([
      { route: '', redirect: 'home' },
      { route: 'home', name: 'home', moduleId: PLATFORM.moduleName('home/home'), title: 'Home' },
      { route: 'profile', name: 'profile', moduleId: PLATFORM.moduleName('profile/profile'), title: 'Profile' },
      { route: 'sessions', name: 'sessions', moduleId: PLATFORM.moduleName('sessions/sessions'), title: 'Sessions' },
    ]);
  };
};
