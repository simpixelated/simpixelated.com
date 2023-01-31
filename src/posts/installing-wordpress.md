---
title: "Installing Wordpress"
date: 2010-06-27
tags:
  - WordPress
---

A few tips:

- Install Wordpress in its own directory, below the root, with a unique name. I tend to use a password generator to create my directory name. Although the location of your folder can easily be found in the HTML of your site (all your CSS and image files will be inside it), this will be a smaller barrier against scripts that look for Wordpress at the root or in common folders like "blog", "wp" or "wordpress". Keeping Wordpress out of the root will keep the install cleaner and allow you to have sub-directories and other files in your root that won't conflict with Wordpress.
- Do not use admin as your username. Previous versions of Wordpress forced you to use it on first install, but with 3.0 you can now choose your own username. It doesn't have to be crazy, although the more complex it is the safer it will be, but anything besides admin will be an improvement.
- Do not use an English word as your password. Again, use a password generator. In addition, consider using a password repository to store your password in case you want to access your admin from another computer. But trying to use a password that is easy to remember probably means it is easy to crack.
- Install the plugins and themes you want, remove the ones you don't. Although the default Wordpress theme (Twenty Ten), akismet, and Hello Dolly are probably very safe, its good practice to just remove any files you aren't using. Don't worry, you can download them again if you really want them. But by keeping them off your server, its fewer files that you have to worry about updating and if you ever run into security problems, you won't have to worry about checking them.
- Update your comment settings. You'll probably want to treat most posts spam, only allow comments from people who have posted before, and generally make it hard for your blog to get filled up with spam. Get an akismet API and activate the plugin. Once your blog gets popular, you'll be happy you had it all ready to go first.
- Setup your permalinks. Despite it not being an option, category/postname seems to be the most recommended option for SEO purposes. Its also the most readable for humans. No one cares what the post date was, but if they want to find more posts in that category, its easy for them to do by manipulating the URL. It also allows people on other sites to trust the link more which means they are more likely to click on it.
