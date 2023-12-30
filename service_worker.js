// Adds the displayAvailability listener when extension is installed/updated
chrome.runtime.onInstalled.addListener(() => chrome.commands.onCommand.addListener(displayAvailability))

/**
 * * Displays the people available and unavailable if command matches the extension's shortcut key
 * * Achieved by sending a message to the content script on the when2meet page
 * * Does nothing if command is different or tab is not a when2meet scheduling tab
 * @param {string} command - the keyboard shortcut entered by user
 */
async function displayAvailability(command)
{
  // command matches the extension's shortcut
  if (command === 'view_people')
  {
    // get the current/most recent
    let [currTab] = await chrome.tabs.query({active : true, lastFocusedWindow : true})

    // activate extension only if on a when2meet link that is concerned with scheduling
    if ((currTab.url.includes('when2meet.com/?')) && (currTab.url.includes('About') === false))
    {      
      let response = await chrome.tabs.sendMessage(currTab.id, {message : command})
    }
  }
}

chrome.runtime.onStartup.addListener(() => chrome.commands.onCommand.addListener(displayAvailability));