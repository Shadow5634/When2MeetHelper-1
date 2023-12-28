# When2MeetHelper-1

## Description

This is an extension built for chrome that lets one view the available and unavailable people at a particular time slot in a when2meet link.

In the first iteration (version 1.0.0) this information shall be displayed in an alert box on hitting a keyboard shortcut specific to this extension.

## Motivation

Being a  head undergraduate TA at my university I have had to use when2meet quite often in order to schedule meetings. 

However, one cannot view the available and unavailable people for a particular time slot if the time ranges are very large since this information is limited to the top of the screen. In order to overcome this I would have to zoom out considerably which is not an efficient solution. 

Given that I am currently learning web development on my own I have decided to make a chrome extension that solves this issue. I plan to publish this on the chrome extension store as a free extension so that others can benefit as well.

## Current features

Extention in final state of first iteration!!
Displays the date and list of available and unavailable people at time slot that corresponds to cursor's position
Also does the above if the cursor is not on a time slot displaying empty fields

## Usage Instructions

Keyboard shortcut: `Ctrl + Shift + E`

Go to a when2meet scheduling page and reload the page to ensure the extension is actually in effect (_might not work otherwise_).

Bring your cursor on a time slot on the **right** table (i.e. the one labeled Group's Availability). Then hit the above keyboard shortcut and watch the magic happen!

Note: The extension is not on the chrome web store yet. You shall have to download these files and upload them as unpacked extension in developer mode at the chrome extensions website