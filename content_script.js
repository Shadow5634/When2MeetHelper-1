chrome.runtime.onMessage.addListener(showAvailability)

function showAvailability(request, sender, sendResponse)
{
  if (request.message === 'view_people')
  {
    sendResponse({reply : 'done'})
  }
  else
  {
    sendResponse({reply : 'UNEXPECTED MESSAGE!!!'})
  }
}