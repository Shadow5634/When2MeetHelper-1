chrome.commands.onCommand.addListener(displayAvailability)

async function displayAvailability(command)
{
  if (command === 'view_people')
  {
    // get the current/most recent
    let [currTab] = await chrome.tabs.query({active : true, lastFocusedWindow : true})

    // activate extension only if on a when2meet link that is concerned with scheduling
    if ((currTab.url.includes('when2meet.com/?')) && (currTab.url.includes('About') === false))
    {
      await chrome.scripting.executeScript
      ({
        target : {tabId : currTab.id},
        files : ['content_script.js']
      })
      
      // let response = await chrome.tabs.sendMessage(currTab.id, {message : command})
    }
  }
}