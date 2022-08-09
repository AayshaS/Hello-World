const path =require('path');
//const { default: $ } = require('webdriverio/build/commands/browser/$');

describe('Upload Test', () => {
    it('Simple upload test',async () => {
      await  browser.url('https://the-internet.herokuapp.com/upload')
     // await $()
      console.log(__dirname);
      //store file path
      const filepath=path.join(__dirname,'../data/mocha.png')
      //upload test file path
      const remoteFilePath =await browser.uploadFile(filepath)
      //st file path value in the input field
     await $('#file-upload').setValue(remoteFilePath);
     //await setfilepath.setValue(remoteFilePath)

      await $('//input[@id="file-submit"]').click();//click submit button
      //    
      await expect($('h3')).toHaveText('File Uploaded!');
    });

    it.only('Upload on a hidden input field',async () => {
        await browser.url('https://practice.automationbro.com/cart/');
        console.log(__dirname);
        //store file path
        const filepath=path.join(__dirname,'../data/mocha.png')
        //upload test file path
        const remoteFilePath =await browser.uploadFile(filepath)
        //removing hidden class excute javascript class within browser
        await browser.execute("document.querySelector('#upfile_1').className=''");
        await $('#upfile_1').setValue(remoteFilePath);
     //await setfilepath.setValue(remoteFilePath)

      await $('//input[@id="upload_1"]').click();
      await expect($('//label[@id="wfu_messageblock_header_1_label_1"]')).toHaveTextContaining('File mocha.png uploaded successfully');
    });
});