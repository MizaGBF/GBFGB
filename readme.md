# Granblue Fantasy Genesis Bar Display  
Extension to display the Genesis Bar value.  
  
### How to use  
1. Load this extension as an unpacked extension.  
2. Copy the extension ID.  
3. Make a bookmarklet with the following and replace `YOUR_EXTENSION_ID` by the ID that you copied:  
  
```javascript
javascript:(function () { try{ if(chrome.runtime && chrome.runtime.sendMessage){ chrome.runtime.sendMessage('YOUR_EXTENSION_ID', {data: ""+stage.pJsnData.unique_gauge.value}, (response) => {});} else {alert('Error, Extension messaging API not found: Is the extension loaded?');} } catch(err) {} })();
```
  
The current percentage will appear on the Chrome extension icon.  
  
### Disclaimer  
Use or modify it at your own risk.