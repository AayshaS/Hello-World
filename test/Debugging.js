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

        // if we want to check and debug so can change info globle lable error 
        // and its print all details related that
        // pause
        //browser.pause(2000);
        //debug
        // for debug the specific element we increase time as framework lavel mocha opt like 600000 and check during execution and run command on terminal

        //await browser.debug();

        console.log($('//button[@type="submit"]'));
         $('//button[@type="submt"]').click();
       // await browser.pause(4000);
        var textAlert= await $('//div[contains(text(),"Thanks for contacting us! We will be in touch with you shortly")]').getText();
         expect(textAlert).toHaveText('Thanks for contacting us! We will be in touch with you shortly');
         console.log("Assert successful");
    });
});
