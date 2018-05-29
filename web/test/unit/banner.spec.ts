import { BannerCustomElement } from '../../src/banner';

describe('App Banner', () => {
    it('should welcome user', () => {
        expect(new BannerCustomElement().bannerMessage).toBe('Welcome To Jam Meetup');
    })
});