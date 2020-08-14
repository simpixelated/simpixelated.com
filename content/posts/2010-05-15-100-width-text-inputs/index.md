---
title: "100% width text inputs"
date: "2010-05-15"
tags:
 - CSS
---

I've always been frustrated by 100% width text inputs. As soon as you add padding (which is a must), they extend beyond the width of their parent, because the browser assumes that width = 100% + padding. In the past I've simply set a fixed width, which of course caused problems in different browsers and had me pushing pixels for hours on end. But here comes CSS3 to the rescue! [box-sizing](http://stackoverflow.com/questions/628500/can-i-stop-100-width-text-boxes-from-extending-beyond-their-containers) tells the browser to calculate padding before the width. Magically, my form inputs now fill to the width of their parent, allowing me to update the design easily without worrying about breaking anything.
