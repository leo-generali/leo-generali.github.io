---
path: "/writing/why-use-gatsby"
date: "2018-02-23"
emoji: "🏠"
title: "Why I Used Gatsby for my Personal Site"
---

![Leonardo as Jay Gatsby](leonardo.jpg "Leonardo DiCaprio as Jay Gatsby")

It seems like every 6 months I get sick of my personal site and want to give it a fresh coat of paint. I had been using Gatsby to power the site but wasn’t a fan of how I had originally set my site up. Instead of doing the responsible thing and trying to sort the mess I made up, I razed it to the ground and started a brand new site. Now that that’s fresh in my mind, let me tell you why I think Gatsby is such an exciting tool.

Before we dive any deeper, a little background: Gatsby is a static site generator that’s built on top of React. At the end the end of the day any code I write using Gatsby will output into standard HTML, CSS, and JavaScript files. For more information about static site generators in general, I’d recommend this [article](https://wsvincent.com/what-is-a-static-site-generator/) written by William Vincent.

There are a ton of benefits to doing things this way, but the one I’m most interested in is speed. Static site generators are usually pretty quick to load, and Gatsby prides itself in being EVEN faster than the competition 🚀.

Bottom line: Gatsby’s fast. *Very* fast.

### Getting Everything Set Up

Setup couldn’t be easier. Gatsby has a rich command line tool that can easily be installed with `npm install --global gatsby-cli`. From there, you gain access to a whole slew of other commands to get you up and running as quickly as possible.

### Actually Building the Site

Gatsby heavily relies on the concept of components. Without getting too much into the weeds, components are blocks of code that you can reused throughout with your site. For more detailed information, you can check out [this page](https://reactjs.org/docs/components-and-props.html) of the official React documentation for more info.

All in all, I love building sites like this. Extrapolating out common UI elements of your code into reusable lego-like building blocks is a fun way create.

### Other Benefits to Gatsby

Supportive community that has spent a lot of time working on plugins for your favorite libraries to use under Gatsby. No matter what your build process is, I can almost guarantee that someone’s created a plugin that aligns with what you’re already doing.

I think Gatsby is a great first introduction to React and GraphQL. If you’ve been developing for a bit and wanted to try out React I think Gatsby’s a great way to dip your toes into the pool. Due to the smaller nature of personal website, you won’t be bogged down by concepts of state management and worry about a lot of external libraries like Redux or MobX. 

By the same token, I think Gatsby is a great introduction to GraphQL. The documentation does a great job not only explaining what you’re doing but why. I’ve never used GraphQl before, which was something I was worried about going into this. There is also a built in GraphQL playground you can access at anytime during development by going to `http://localhost:8000/___graphql`. It’s a great resource for prototyping out some different queries you can put together.

Great excuse to test some of some of the React based styling libraries. I had never played around with [Styled Components](https://www.styled-components.com/) and stayed very deep in the SASS world for the longest time. With this refresh I decided to jump in headfirst and really leverage some of the benefits of CSS-in-JS. I gotta say, I really enjoyed the experience and will probably continue using it as my go to styling library for React based applications.

I’m fully aware of this incoming bias, but I love that Gatsby is built on top of JavaScript. Some of the other static site generators I tried in the past were built on top of different languages, and though they don’t necessarily need full in-depth knowledge to run them, it doesn’t make things easier. I had previously tried to use Hugo and ran into some Go specific issues. The web is already a pretty complicated place - I don’t need to introduce anything more to make it harder.

### Some things to Watch Out For

In an effort to be fair, I thought I’d list a few things I think people should watch out for when using Gatsby.

I wouldn’t recommend it if you’re brand new to programming. Gatsby (and React in general) introduce a lot complications that simple HTML and CSS files won’t. If you’re only recently started programming, I suggest plugging away on some other projects first before getting into Gatsby. It’s not even that I think Gatsby is complicated (it’s not), but more so that having a solid grasp of the basics will make jumping into Gatsby that much easier.

Gatsby is opinionated. That’s a straight up fact. There are very specific ways to set your site up, but that’s all done in an effort to create a great end product. Some people won’t like this. I obviously think it’s worth it, but I could see some people not being able to get past the fact that Gatsby wants things in a certain way. I’m a Rails fanboy though - so what did you expect 💁‍♂️.

The end result. This site zips. There’s no way around it. Things load VERY quickly. Your end product is going to move at a 100 miles a minute and load so fast. If you’re a fan of JavaScript or looking to try out React, I highly recommend Gatsby - you’ll be happy you did.