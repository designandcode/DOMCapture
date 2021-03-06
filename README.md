## DOMCapture, a chrome extension

### What's this about now?

Ah, I just wanted an easier way to take screenshots of parts of web pages 

On a Mac:
 1. (Shift - ⌘ -3)
 2. crosshairs
 3. esc to cancel
 4. find the screenshot
 5. crop the screenshot
 6. move the screenshot
 7. rename the screenshot
So many steps... 

### Use this instead

 1. Install the extension
   a. [Link to the extension][chrome-store-link] on Chrome Store
   b. Or clone this repo and upload it to your Chrome Browser directly
https://www.cnet.com/how-to/how-to-install-chrome-extensions-manually/
-- Don't bother with the CRX stuff. You can just load the _dist folder 
into Chrome directly
 2. Activate the plugin by clicking on the camera icon in the Chrome extensions area
 3. Move your mouse cursor around the webpage to highlight the node you want to screenshot
 4. Click the node
 5. Save the already cropped screenshot where you want and name it what you want
 6. Create dozens of screenshots in the time it would take to do make one :sunglasses:
 7. Turn off the plugin by clicking the camera icon again. Now the webpage is back to normal

### **Important* *

When clicking on action items like buttons and links, the plugin should stop the
action from happening and allow you to screen shot the node directly.. However this
is not guaranteed since the plugin has no control over the way those actions were
coded by the webpage developers. ***For this reason I recommend you don't screenshot 
action items directly, but rather screenshot the closest parent then crop later.***
I just want to be sure you don't do something unexpected by clicking on something 
you didn't want :relaxed:


[chrome-store-link]: https://chrome.google.com/webstore/detail/domcapture/jpjadhglengbfihbldhdfddppmicaiio
