# When2MeetHelper-1

# Table of Contents
1) [Description](#description)
2) [Motivation](#motivation)
3) [Current Features](#current-features)
4) [Usage Instructions](#usage-instructions)
5) [Bug Tracker](#next-on-the-tracker)

## 1] Description

This is an extension built for chrome that lets one view the available and unavailable people at a particular time slot in a when2meet link.

In the first iteration (version 1.0.0) this information shall be displayed in an alert box on hitting a keyboard shortcut specific to this extension.

## 2] Motivation

Being a  head undergraduate TA at my university I have had to use when2meet quite often in order to schedule meetings. 

However, one cannot view the available and unavailable people for a particular time slot if the time ranges are very large since this information is limited to the top of the screen. In order to overcome this I would have to zoom out considerably which is not an efficient solution. 

Given that I am currently learning web development on my own I have decided to make a chrome extension that solves this issue. I plan to publish this on the chrome extension store as a free extension so that others can benefit as well.

## 3] Current features

Extention in final state of first iteration!!
Displays the date and list of available and unavailable people at time slot that corresponds to cursor's position. Also does the above if the cursor is not on a time slot displaying empty fields

## 4] Usage Instructions

Keyboard shortcut: `Ctrl + Shift + E`

Go to a when2meet scheduling page and reload the page to ensure the extension is actually in effect (_might not work otherwise_).

Bring your cursor on a time slot on the **right** table (i.e. the one labeled Group's Availability). Then hit the above keyboard shortcut and watch the magic happen!

Note: It appears that some browsers (e.g.: Microsoft Edge) do not pick up the keyboard shortcut from the manifest file and requires user to manually update this by going into keyboard shortcuts panel of extensions. Be sure to verify that a shortcut exists for this extension after installation.

Note: Because chrome web store requires a registration fee I shall not be posting this on the chrome web store. In order to use the extension you will have to download these files and upload them as unpacked extension in developer mode at the chrome extensions website. Sorry for the inconvenience.

## 5] Next on the Tracker

- Have a popup that lets the user edit the keyboard shortcut that triggers the extension. This is to prevent problems such as those on Edge

- Try out the extension on different browsers to check compatibilty and issues.

- Try finding a free way to publish this extension on one of the extension stores.