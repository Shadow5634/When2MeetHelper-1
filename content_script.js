/**
 * Keeps track of whether the mouse is over the group's availability grid
 */
let mouseOverGrid = false
main()

/**
 * The main executable for the content scripts. 
 * Sets up all the listeners - mouseOnGrid and extension trigger shortcut
 */
function main()
{
  // adds the showAvailabilityManager listener for the current when2meet scheduling page
  chrome.runtime.onMessage.addListener(showAvailabilityManager)
  attachMouseListeners()
}

/**
 * Attaches the listeners to update {@link mouseOverGrid}
 */
function attachMouseListeners()
{
  let groupAvailabilityGrid = document.querySelector('#GroupGridSlots')

  groupAvailabilityGrid.addEventListener('mouseover', mouseOnGridListener)
  groupAvailabilityGrid.addEventListener('mouseleave', mouseOffGridListener)
}

/**
 * * Function that manages showing the list of available and unavailable people on receiving prompt of view_people
 * * Replies with UNEXPECTED MESSAGE!!! string if prompt is not the expected one 
 * @param {*} request - the request message being sent
 * @param {*} sender - the sender of the request
 * @param {*} sendResponse - function callback used to reply to the request
 */
function showAvailabilityManager(request, sender, sendResponse)
{
  if ((request.message === 'view_people') && (mouseOverGrid === true))
  {
    showAvailability()
    sendResponse({reply : 'done'})
  }
  else
  {
    alert('Mouse not on grid')
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
 * @param {string} id - the type of people requested - #Available/#Unavailable 
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

    // reduces the names of people array to a string
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

/**
 * Listener that gets triggered when mouse is hovering over group availability grid. 
 * Sets {@link mouseOverGrid} to true 
 */
function mouseOnGridListener()
{
  mouseOverGrid = true
}

/**
 * Listener that gets triggered when mouse moves off the group availability grid. 
 * Sets {@link mouseOverGrid} to false 
 */
function mouseOffGridListener()
{
  mouseOverGrid = false
}