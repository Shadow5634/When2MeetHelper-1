chrome.runtime.onMessage.addListener(showAvailabilityManager)

function showAvailabilityManager(request, sender, sendResponse)
{
  if (request.message === 'view_people')
  {
    showAvailability()
    sendResponse({reply : 'done'})
  }
  else
  {
    sendResponse({reply : 'UNEXPECTED MESSAGE!!!'})
  }
}

/**
 * Function that displays who is available at the current slot time the cursor is over
 * Displayed as an alert message
 */
function showAvailability()
{
  let displayStr = ''

  displayStr += 'AVAILBLE:\n' + getAvailablePeople() + '\n'

  alert(displayStr)
}

/**
 * 
 * @returns The list of available people as a comma separated list
 */
function getAvailablePeople()
{
  let divOfAvailable = document.querySelector('#Available')
  if (divOfAvailable === null)
  {
    return ''
  }
  else
  {
    let availableHTML = divOfAvailable.innerHTML
    let availableNamesArray = availableHTML.split('<br>')

    let availableNamesStr = availableNamesArray.reduce
    (
      function(acc, currName)
      {
        if (currName !== '')
        {
          if (acc === '')
          {return currName}
          else
          {return acc + ', ' + currName}
        }
        else
        {return acc}
      }
      , ''
    )

    return availableNamesStr
  }
}
