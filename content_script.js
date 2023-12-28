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

  displayStr += 'DATE: ' + getDateTime() + '\n\n'
  displayStr += 'AVAILBLE:\n' + getPeople('#Available') + '\n\n'
  displayStr += 'UNAVAILABLE:\n' + getPeople('#Unavailable')

  alert(displayStr)
}

/**
 * Returns the list of people's availabilty/unavailability at cursors time slot as a comma separated list
 * Returns available list if id = #Available
 * Returns unavailable list if id = #Unavailable
 * @returns string
 */
function getPeople(id)
{
  let divOfPeople = document.querySelector(id)
  if (divOfPeople === null)
  {
    return ''
  }
  else
  {
    let peopleHTML = divOfPeople.innerHTML
    let peopleNamesArray = peopleHTML.split('<br>')

    let peopleNamesStr = peopleNamesArray.reduce
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

    return peopleNamesStr
  }
}

/**
 * Returns the date and time of the current time slot that the cursor is on
 * @returns string
 */
function getDateTime()
{
  let divOfDate = document.querySelector('#AvailableDate');

  if (divOfDate === null)
  {
    return '';
  }
  else
  {
    return divOfDate.textContent;
  }
}