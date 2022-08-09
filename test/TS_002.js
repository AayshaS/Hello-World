//const { expect } = require("chai");

//const { default: $ } = require("webdriverio/build/commands/browser/$");

describe('Home', async () => {
    it('Open url & Assert title', async () => {
        await browser.maximizeWindow();
        await browser.url('https://practice.automationbro.com/')
        await browser.pause(2000);
        await expect(browser).toHaveTitle('Practice E-Commerce Site – Automation Bro');
        await console.log(browser.getTitle());
    });
    it('Open url & Assert Url', async () => {
        await browser.maximizeWindow();
        await browser.url('https://practice.automationbro.com/about/')
        await browser.pause(2000);
        await expect(browser).toHaveUrl('https://practice.automationbro.com/about/');

    });

    it('Click get Started button & assert element Text', async () => {
        await browser.maximizeWindow();
        await browser.url('https://practice.automationbro.com')
        await $('#get-started').click()
        await browser.pause(2000);
        await expect(browser).toHaveUrlContaining('get-started');

    });

    it('Click get Started button & assert element Text', async () => {
        await browser.maximizeWindow();
        await browser.url('https://practice.automationbro.com')
        await $('//img[@alt="Practice E-Commerce Site"]').click()
        await browser.pause(2000);
        await expect(browser).not.toHaveUrlContaining('get-started');

    });

    it('Finding element & assert Text', async () => {
        await browser.maximizeWindow();
        await browser.url('https://practice.automationbro.com')
      const headingElement = await $('//h1[@class="elementor-heading-title elementor-size-default"]').click()
        await browser.pause(2000);
       const headingText = await headingElement.getText()
       //normal way to get Text and assert
        await expect(headingText).toEqual('Think different. Make different.')
        //it get element mulltiple time and match text
        await expect(headingText).toHaveText('Think different. Make different.')
        // it will take automaticaly text from element 
        await browser.pause(2000);
       // await expect(headingElement).toHaveText('Think different. Make different.')

    });

    it('Get the text of all menu items',async() => {
        await browser.maximizeWindow();
        await browser.url('https://practice.automationbro.com') 
        const expectedLink=[
            "Home",
            "About",
            "Shop",
            "Blog",
            "Contact",
            "My account",

        ];
        const actualLinks=[

        ];
        //untill wait use for particuler element visible and condition false
        await browser.waitUntill(async function() {
            const homeText=await $('#primary-menu li').getText()
            return homeText==="shop"//true or false
        },
        {
            timeout:5000,
            timeoutMsg:"could not varify"
        });

        var navLinks= await $('//ul[@id="-menuprimary"]/li')
      //  const navLinks= await $('#primary-menu').$$('li[id*=menu]');
     // await $('#primary-menu').waitForDisplayed({timeout:1000});
     // const navLinks=await $$('li[id*=menu]');
        for(var i=0;i<navLinks.length;i++){    
            actualLinks.push(i)
        }
   // when we are assert non web elemrnt like string arrey we have to use jasmine assertion

        await expect(expectedLink).toEqual(actualLinks);

    });
});