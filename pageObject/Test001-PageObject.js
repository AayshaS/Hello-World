//import {format} from 'date-fns';
const format1=require('date-fns')
class PageObject {
    
  get contraryTXT() {
    return $('//a[contains(text(), "Contrary")]');
  }
  get contraryHoveredTXT() {
    return $('//div[@id= "contraryTexToolTip"]');
  } // You hovered over the Contrary
  get sectionTXT() {
    return $('//a[contains(text(), "1.10.32")]');
  }
  get sectionHoveredTXT() {
    return $('//div[@id= "sectionToolTip"]');
  } // You hovered over the 1.10.32

  fullScreenshot() {
    // var str=element.getTitle()
    // var d = new Date();

    // let stamp=new SimpleDateFormat("yyyyMMdd_HHmmss").format(new Date());
   // console.log(stamp);

    //var time = d.toLocaleTimeString();
  //  browser.saveScreenshot("./utility"+ d + ".png");
  const d1 = new Date();
 const date =format1.format(d1, 'dd-MM-yyyy HH:mm:ss');
 console.log(date); // 👉️ 
 browser.saveScreenshot("./utility/"+"Screenshot-"+ date + ".png");
   
  }
//   get dateTime() {
//    const date = new Date()
   
// //    var formatter = new SimpleDateFormat("dd-MM-yyyy hh:mm:ss");
// //     var strDate = formatter.format(date);
// //     var todaysDate = strDate.replace(" ", "-").replace(":", "-");
//     return date;
// }

 }
module.exports = new PageObject();
