---
title: "Install Homebrew for OS X"
date: 2014-03-18
tags:
  - development
  - Homebrew
---

After more than a decade of Windows use, I finally made the switch to an Apple. I started using a Macbook Pro at Rapid7 last year and although I was mostly using Ubuntu in a VM, I got addicted to the simplicity and power of these sleek machines. Since I had to give the company property back when I switched jobs, I had to buy my own. I figured it was a good investment, since I work from home.

One of the first things I did, in order to easily download applications like Node.js, MongoDB, etc. was to install Homebrew, the Mac version of apt-get (package manager). Here's how to do it:

Open a terminal (use spotlight search to find it) and enter:

```
ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"
```

from [http://brew.sh/](http://brew.sh/)
