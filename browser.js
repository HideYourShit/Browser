window.onresize = doLayout;
var isLoading = false;
var locationURL = "";
onload = function() {
  doLayout();


  document.querySelector('#back').onclick = function() {
    webview.goBack();
  };

  document.querySelector('#forward').onclick = function() {
    webview.goForward();
  };

  document.querySelector('#home').onclick = function() {
    navigateTo('wwww.google.com');
  };

  document.querySelector('#reload').onclick = function() {

      webview.reload();

  };

  document.querySelector('#location-form').onsubmit = function(e) {
    e.preventDefault();


    navigateTo(document.querySelector('#location').value);


  };
  function checkSearch(url){

    if(new RegExp("[a-zA-Z0-9]+://([a-zA-Z0-9_]+:[a-zA-Z0-9_]+@)?([a-zA-Z0-9.-]+\\.[A-Za-z]{2,4})(:[0-9]+)?(/.*)?").test(url)) {

}
  }
  webview.addEventListener('did-start-loading', handleLoadStart);
  webview.addEventListener('did-stop-loading', handleLoadStop);
  webview.addEventListener('did-fail-load', handleLoadAbort);
  webview.addEventListener('did-get-redirect-request', handleLoadRedirect);
  webview.addEventListener('did-finish-load', handleLoadCommit);

};

function navigateTo(url) {
//  if(url.includes('https://'))url.replace('https://', '');
//  if(url.includes('http://'))url.replace('http://', '');
//  url = "https://hideyourshitapp.com:443/proxy.php?https://" + url;

  document.querySelector('webview').src = url;
}

/*
function extractHostname(url) {
    var hostname;
    if (url.indexOf("://") > -1) {
        hostname = url.split('/')[2];
    }
    else {
        hostname = url.split('/')[0];
    }
        hostname = hostname.split(':')[0];
    hostname = hostname.split('?')[0];

    return hostname;
}
*/
function newWindow() {
                       const remote = require('electron').remote;
                   const BrowserWindow = remote.BrowserWindow;

                   newWindow = new BrowserWindow({width: 1024, height: 768, frame:false});
                   newWindow.setResizable(false);
                   newWindow.loadURL('file://' + __dirname + '/browser.html');                     }
function handleLoadCommit() {
  var webview = document.querySelector('webview');

  document.querySelector('#location').value = webview.getUrl();


  document.querySelector('#back').disabled = !webview.canGoBack();
  document.querySelector('#forward').disabled = !webview.canGoForward();
}
/*
function getlocURL(){
   var url = webview.getUrl();
   url = url.replace('https://hideyourshitapp.com:443/proxy.php?https://','');
   return extractHostname(url);

}
*/
function handleLoadStart(event) {
  document.body.classList.add('loading');
  isLoading = true;

  if (!event.isTopLevel) {
    return;
  }

  document.querySelector('#location').value = event.url;
}
function doLayout(){
var webview = document.querySelector('webview');
var webview = document.querySelector('webview');
var controls = document.querySelector('#controls');
var controlsHeight = controls.offsetHeight;
var windowWidth = document.documentElement.clientWidth;
var windowHeight = document.documentElement.clientHeight;
var webviewWidth = windowWidth;
var webviewHeight = windowHeight - controlsHeight;
webview.style.width = webviewWidth + 'px';
webview.style.height = webviewHeight + 'px';
}
function handleLoadStop(event) {
  // We don't remove the loading class immediately, instead we let the animation
  // finish, so that the spinner doesn't jerkily reset back to the 0 position.
  isLoading = false;
}

function handleLoadAbort(event) {
  console.log('LoadAbort');
  console.log('  url: ' + event.url);
  console.log('  isTopLevel: ' + event.isTopLevel);
  console.log('  type: ' + event.type);
}

function handleLoadRedirect(event) {
  document.querySelector('#location').value = event.newUrl;
}
