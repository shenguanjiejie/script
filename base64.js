function getBase64Image(img) {
  var canvas = document.createElement("canvas");
  canvas.width = img.width;
  canvas.height = img.height;
  var ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0, img.width, img.height);
  var ext = img.src.substring(img.src.lastIndexOf(".")+1).toLowerCase();
  var dataURL = canvas.toDataURL("image/"+ext);
  return dataURL;
}


function paste(text){
  document.designMode = 'on'
  let bool = document.execCommand(text)
  if (!bool) {
    alert('sorry, 手动复制吧')
  } else {
    let val = 'something'
    let inputEle = document.createElement('input')
    document.body.appendChild(inputEle)
    inputEle.setAttribute('value', val)
    inputEle.setAttribute('readonly', 'readonly')
    inputEle.select()
    document.execCommand('copy')
    document.body.removeChild(inputEle)
    alert('copied')
  }
  document.designMode = 'off'
}

// 'use strict';
// ( function run() {
//   // --- SET CURRENT APP VARIABLE NEEDED FOR DIALOGS & StandardAdditions.osax ---
//   var app = Application.currentApplication()
//   app.includeStandardAdditions = true
//
// // --- SET KME APP VARIABLE NEEDED TO GET/SET KM VARIABLES ---
//   var kme = Application("Keyboard Maestro Engine");
//
//
// //--- GET A KM VARIABLE ---
// //    Returns empty string if it doesn't exist
//   var filename = kme.getvariable("filename") || 'Default Value if NOT Found';
//   console.log("someVarNameStr: " + someVarNameStr)
//
//   var fs = require("fs");
//   var imageData = fs.readFileSync(filename); // 例：fileUrl="D:\\test\\test.bmp"
//   var imageBase64 = imageData.toString("base64");
// //--- COPY TO CLIPBOARD ---
// //      Verify using KM Clipboard History Viewer
//   app.setTheClipboardTo(imageBase64)
// })()

function pbcopy(data) {
  var proc = require('child_process').spawn('pbcopy');
  proc.stdin.write(data); proc.stdin.end();
}

// var fs = require("fs");
// var imageData = fs.readFileSync("/Users/shenruijie_vendor/Desktop/test/height/61.jpeg"); // 例：fileUrl="D:\\test\\test.bmp"
// var imageBase64 = imageData.toString("base64");
// pbcopy(imageBase64)

var arguments = process.argv.splice(2);
pbcopy(arguments.toString())

// var img = "/Users/shenruijie_vendor/Desktop/test/height/62.jpeg";
// var image = new Image();
// image.src = img;
// image.onload = function(){
//   var base64 = getBase64Image(image);
//   paste(base64)
// }


