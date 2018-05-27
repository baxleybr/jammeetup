import { $ } from 'aurelia-protractor-plugin/protractor';

export class AppPO {
    public navButtonList = ['home', 'profile', 'sessions']

    public banner = {
        greeting: $('#banner h2'),
    }

    public body = {
        header: $('.body h1'),
    }
}