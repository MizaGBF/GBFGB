chrome.runtime.onMessageExternal.addListener((message, sender, sendResponse) => {
	if(message.data && /^\d+$/.test(message.data)) {
		let i = parseInt(message.data);
		if(i >= 0 && i < 100)
		{
			chrome.action.setBadgeBackgroundColor({ color: 'green' });
			chrome.action.setBadgeText({ text: message.data + "%" });
		}
	}
});