chrome.commands.onCommand.addListener((command: string) => {
	if (command === 'unload_active_tab') {
		chrome.tabs.query(
			{active: true, currentWindow: true},
			(tabs: chrome.tabs.Tab[]) => {
				if (tabs[0]?.id !== undefined) {
					chrome.tabs.discard(tabs[0].id)
				}
			},
		)
	}
})
