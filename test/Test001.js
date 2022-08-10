
var test01 = require("../pageObject/Test001-PageObject");
var format1=require('date-fns')
let d1 = new Date();
 let date =format1.format(d1, 'dd-MM-yyyy-HH-mm-ss');
 
describe("sample text for mouse hover", async () => {
  it("mouse hover on text", async () => {
    await browser.maximizeWindow();
    await browser.url("https://demoqa.com/tool-tips");
    
    await test01.contraryTXT.moveTo();
    await browser.pause(2000);
    //await browser.saveScreenshot("./utility/hover1"+d+".png");
    //await test01.fullScreenshot();
    browser.saveScreenshot("./utility/"+"Screenshot-"+ date + ".png");
    await browser.pause(2000);
    // await browser.moveToObject(contraryTXT).pause(3000).saveScreenshot("./utility/screenShots1.png")
    const text1 = await test01.contraryTXT.getText();
    console.log("Frist Text1", text1);
    await test01.contraryHoveredTXT.waitForDisplayed({ timeout: 3000 });
    const hoveredtext1 = await test01.contraryHoveredTXT.getText();
    console.log(hoveredtext1);
    await browser.pause(2000);
    await test01.sectionTXT.scrollIntoView();
    await test01.sectionTXT.moveTo();
    await browser.pause(2000);
    //await browser.saveScreenshot("./utility/hover2.png");
   // await test01.fullScreenshot();
   browser.saveScreenshot("./utility/"+"Screenshot-"+ date + ".png");
    await browser.pause(2000);
    const text2 = await test01.sectionTXT.getText();
    console.log("Secounf Text1", text2);
    await test01.sectionHoveredTXT.waitForDisplayed({ timeout: 3000 });
    const hoveredtext2 = await test01.sectionHoveredTXT.getText();
    console.log(hoveredtext2);
    await browser.pause(3000);
  });
});
