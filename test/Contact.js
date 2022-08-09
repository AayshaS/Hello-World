
describe('Fill all the input fields form and assert',() => {
    it('add contact fields',async () => {
        await browser.maximizeWindow();
        await browser.url("https://practice.automationbro.com/contact/")
        await $('//input[@class="input-text"][1]').setValue('aaysha');
        await browser.pause(5000);
        
//addValue -- add the value in to the input box
//setvalue--frist clear
//           than add tha value in to the input box


        await $('//div[@data-grid="grid_1"]/div[2]//input[@type="email"]').addValue('aasha@gmail.com');
        await browser.pause(5000);
        await $('//div[@data-grid="grid_1"]/div[3]//input').addValue('7974886000');
        await browser.pause(5000);
        await $('//div[@data-grid="grid_1"]/div[4]//textarea').addValue('Hii this is aasha');
        await browser.pause(5000);
        await $('//button[@type="submit"]').click();
        await browser.pause(4000);
        var textAlert= await $('//div[contains(text(),"Thanks for contacting us! We will be in touch with you shortly")]').getText();
         expect(textAlert).toHaveText('Thanks for contacting us! We will be in touch with you shortly');
         console.log("Assert successful");
    });
});

describe('Get the list off all recent post',async () => {
    it('',async () => {
        await browser.maximizeWindow();
        await browser.url("https://practice.automationbro.com/blog/")
     // const recentPostLink=  await $('//h2[@class="widget-title"]');
     const recentPostLink=  await $$('//h2[@class="widget-title"]');
        for(const items of recentPostLink){
            const text =await items.getText()
            await expect(text.length).toBeGreaterThan(10)
        }
        await expect(recentPostLink).toHaveLength(4);
    });
});