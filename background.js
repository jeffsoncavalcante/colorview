var ativo = window.localStorage.getItem('ativo')
if(ativo == 'sim' ){
    chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {          
        if (changeInfo.status == 'complete') {   
           chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
              chrome.tabs.sendMessage(tabs[0].id, {action: "SendIt"}, function(response) {});  
           });
        }
     });
    console.log('back')
}

