chrome.runtime.onMessageExternal.addListener((message, sender, sendResponse) => {
	if(message.data && /^\d+$/.test(message.data)) {
		let i = parseInt(message.data);
		if(i >= 0 && i < 100)
		{
			if(i < 35)
				chrome.action.setBadgeBackgroundColor({ color: 'green' });
			else if(i < 50)
				chrome.action.setBadgeBackgroundColor({ color: 'orange' });
			else if(i < 55)
				chrome.action.setBadgeBackgroundColor({ color: 'red' });
			else if(i < 85)
				chrome.action.setBadgeBackgroundColor({ color: 'green' });
			else if(i < 100)
				chrome.action.setBadgeBackgroundColor({ color: 'orange' });
			else
				chrome.action.setBadgeBackgroundColor({ color: 'red' });
			chrome.action.setBadgeText({ text: message.data + "%" });
		}
	}
});