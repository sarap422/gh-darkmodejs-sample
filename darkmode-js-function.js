/* darkmode-js-function.js */
/* ============================================ */
$(document).ready(function () {

  // option設定
  var options = {
    // 左端に置く
    bottom: '-17px', // default: '32px'
    right: 'unset', // default: '32px'
    left: '-17px', // default: 'unset'
    time: '0.5s', // default: '0.3s'
    mixColor: '#fff', // default: '#fff'
    backgroundColor: '#fff',  // default: '#fff'
    buttonColorDark: '#100f2c',  // default: '#100f2c'
    buttonColorLight: '#fff', // default: '#fff'
    saveInCookies: false, // default: true,
    label: '🌓' // default: ''
  }

  const darkmode = new Darkmode(options);
  darkmode.showWidget();
});
