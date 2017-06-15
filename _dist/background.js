

var active = false;

//// Called when the user clicks on the browser action.
//chrome.browserAction.onClicked.addListener(function(tab) {
//  // No tabs or host permissions needed!
//  console.log('Turning ' + tab.url + ' red!');
//  chrome.tabs.executeScript({
//    file: '/popup.js'
//  });
//});

//chrome.browserAction.onClicked.addListener(function(tab) {
//	chrome.tabs.executeScript(tab, {file: "/popup.js"}, function(){
//	    initPlugin();
//	});
//});



var code = `
	var active = !active, scriptOptions = {active:active};
`;

chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.tabs.executeScript( {file: "html2canvas.js"}, function(active){
		chrome.tabs.executeScript( {code: code}, function(){
	   	chrome.tabs.executeScript( {file: "popup.js"}, function(){
	   	    //initPlugin(!active);
					//console.log(document);
	   	});
		});
	});
});

