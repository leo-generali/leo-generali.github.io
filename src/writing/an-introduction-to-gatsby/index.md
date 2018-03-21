---
path: /writing/an-introduction-to-gatsby
date: 2018-02-23
emoji: ⚛
title: An Introduction to Gatsby
---

![Leonardo DiCaprio as Gatsby from Great Gatsby](./images/leonardo.jpg)

## Preface
I recently rebuilt my personal website from the ground up with Gatsby. If you haven't heard, Gatsby is a static site generator built on React that has got everybody talking. It was super fun to work with and I’ve been gushing about the experience to anyone who would listen ever since. I had such a good time that I figured I'd write about my experience with Gatsby and some of the issues it solved for me.

## A Little Background
Before we dive any deeper, a little background: Gatsby is a static site generator that’s built on top of React. Code written using Gatsby will output into standard HTML, CSS, and JavaScript files. There are numerous benefits to doing things this way, but the two I’m most interested in were: speed and SEO.

Static site generators are quick to load and Gatsby prides itself in being EVEN faster than the competition. If you head over to any site powered by Gatsby you'll be able to see what I’m talking about. Go on - head over to https://www.gatsbyjs.org/ right now. That's a lot of content that loaded quickly right? Magic!

Unlike pages built on React, or other front-end frameworks, web crawlers don't have issues accessing your content. This has a significant positive effect on how search engines rank your site. Most crawlers also prioritize faster loading speeds - something Gatsby excels at!

## Getting Everything Set Up
Setup couldn’t be easier. Gatsby has a rich command line tool that grants you access to what you need to get up and running as quickly as possible.

You can access the tool through NPM with the following command: `npm install --global gatsby-cli`. After a second, the Gatsby CLI should download itself onto your computer.

## Actually Building the Site
Like the framework it’s built on top of, Gatsby relies heavily on the concept of components. Components are small blocks of code that are reused throughout your entire site.  Each piece of your UI is a separate entity that should be able to live by itself. For more detailed information, check out of the official [React documentation](https://reactjs.org/docs/components-and-props.html) for a good explanation of how and why you would want to build things this way.

As a side note: I love building sites like this. Extrapolating out common UI elements of your code into reusable lego-like building blocks is fun. It gives me the same thrill I had when I first started developing and making *~magic~* appear on the the page.

Here's an example of my navigation component. You'll see that I reuse some other components within it as well:

```javascript
const Navigation = () => (
  <Nav>
    <StyledNavLink exact to="/">
      <NavEmoji>🏠 </NavEmoji>Home
    </StyledNavLink>
    <StyledNavLink to="/writing">
      <NavEmoji>📕 </NavEmoji>Writing
    </StyledNavLink>
  </Nav>
);
```

Not too bad, right?

## Writing Content
Gatsby generates markdown files into static HTML at build time for your website. This gives you all the speed and SEO benefits I talked about up there with the option to add in dynamic data if you wish.

I haven’t yet found a good system for organizing my blog post drafts before I add them to the repo. Currently, I’m doing my writing and editing in [Bear](http://www.bear-writer.com/). When the writing's done, I copy and paste the final version of the post into the repo. This can feel a little janky at times, but it allows me to edit posts wherever I am, so it works for me.

## Gatsby’s Community
Out of the box the default Gatsby starter does a lot of things you love to see in a React configuration. Support for: CSS Modules, Post-CSS, and Hot Module Reloading to name a few. The developer experienced provided is unparalleled compared to other static site generators out there.

If that’s not for you, there’s a vibrant community out there creating a whole slew of other starter kits to get you building your site faster. Check those out [here](https://www.gatsbyjs.org/docs/gatsby-starters/).

Speaking of the community, they’re not just working on starter kits. A lot of smart people are excited about Gatsby and contributing to it’s development. There’s a wide array of plugins you can pop into your project very easily.

I’m personally running `Styled Components`, `Typography.js`, `Remark`, to name a few.  These have helped me bootstrap the development of this site and focus on what’s really important: the content.

No matter what your build process is, I can almost guarantee that someone’s created a plugin that you should be able to easily slot into your workflow.

## Problems Gatsby Solved for Me
I ran into a few other issues with some of the other static site generators I tried out.

Styling my personal site was always more of a pain than it should have been. I had toyed around with some other CSS-in-JS solutions and figured this redesign would be the perfect place use one of those libraries.

I ended up going with [Styled Components](https://www.styled-components.com/) which I had heard great things about.  I enjoyed the experience and will probably continue using it as my go to styling library for React based applications. Template literals makes so much more sense to me. I don't have to remember to camel case my `font-weight`. In case you haven't heard of Styled Components, here's what you end up with:

```javascript
const Year = styled.h3`
  font-weight: 600;
  padding-left: 10px;
  border-left: 4px solid ${colors.primaryColor};
`;
```

Some of the other static site generators I tried in the past were built on languages that I didn't have as much experience in. They don’t necessarily need full in-depth knowledge to run them, it didn’t make things easier.

In a past life I tried to use Hugo and ran into some Go specific issues. Debugging was a big pain and made fixing issues tougher than I would have liked. The web is already a pretty complicated place - I don’t need to introduce anything more to make it harder.

I also tend to swap between two difference machines: a Macbook Pro running OSX and a Dell XPS 13 running Windows 10. Having a consistent development experience across both is vital - I'm looking at you Jekyll.

Like everyone else running a Gatsby powered site, I decided to host my little corner of the internet on [Netlify](https://www.netlify.com/). I was a little worried about it, but the transfer was friction-less. I was up and running in less than 2 minutes. Netlify is a lot more powerful that Github Pages and takes care of a lot of the behind the scenes magic for you. You have know idea how satisfying it was to finally have my site served over HTTPS rather than HTTP.

## So What?
So… why should you care?

The end result.

This site zips. There’s no way around it. Things load VERY quickly. For content heavy sites, this is great news. Users won’t have to wait around to read all of the incredible things you have to say.

If you’re in the market to build (or rebuild if you’re anything like me) your portfolio site I whole-heartedly  recommend you check out Gatsby. It’s still young, but the community support around it it fantastic, and I only see it getting better from here.