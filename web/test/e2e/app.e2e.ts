import { browser, $ } from 'aurelia-protractor-plugin/protractor';
import { config } from '../protractor.conf';
import { AppPO } from './app.po';

describe('App', function () {
    const app = new AppPO();

    beforeAll(async () => {
        await browser.loadAndWaitForAureliaPage(`http://localhost:${config.port}`);
    });

    it('should redirect to "#/home" route', async () => {
        expect(await browser.getCurrentUrl()).toContain('#/home');
    });

    describe('Banner', function () {
        it('should contain greeting message', async () => {
            expect(await app.banner.greeting.getText()).toBe('Welcome To Jam Meetup');
        });

        it('should contain Navigation buttons', async () => {
            for (const button of app.navButtonList) {
                expect(await $(`a[href="#/${button}"]`).isPresent()).toBe(true);
            }
        });
    });

    describe('Body', function () {
        it('should display "Home" content', async () => {
            expect(await app.body.header.getText()).toBe('Home Page Goes Here');
        });
    });
});