

describe('IFrame', () => {
    it('Working with Iframe',async () => {
        await browser.maximizeWindow()
       await browser.url('https://practice.automationbro.com/iframe-sample/')
       //access the iframe frist
       const iframe=await $('//iframe[@id="advanced_iframe"]');
       await browser.switchToFrame(iframe)
       //verify logo exist
       await expect($('#site-logo')).toExist();
    //need to switch to parent frame
        await browser.switchToParentFrame();
       //verify page title
       await expect($('//h1[@class="tg-page-header__title"]')).toHaveText('IFrame Sample');
    });
});