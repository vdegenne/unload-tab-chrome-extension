chrome.commands.onCommand.addListener(function (command) {
    if (command === 'unload_active_tab') {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            var _a;
            if (((_a = tabs[0]) === null || _a === void 0 ? void 0 : _a.id) !== undefined) {
                chrome.tabs.discard(tabs[0].id);
            }
        });
    }
});
