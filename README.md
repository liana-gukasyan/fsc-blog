[![Foo](https://www.firststepcoding.com/static/media/fsc_logo.c94f17b9.png)](https://www.firststepcoding.com)

# [Gatsby's](https://www.gatsbyjs.org) based First Step Coding blog

## Install dependencies
```npm i```

## Usage
Run the blog locally
```gatsby develop```
Gatsby will start a hot-reloading development environment accessible by default at localhost:8000

Create a production build
```gatsby build```
Gatsby will perform an optimized production build for your site, generating static HTML and per-route JavaScript code bundles.


Serve the production build locally.
```gatsby serve```
Gatsby starts a local HTML server for testing your built site.

For more information run `gatsby --help`


### Blog posts content
#### To add new post:
1. Create new folder in `src/blog-posts` with date and title
2. Add markdown file named `index` to created folder
3. Add the content to the file. You can find Markdown Cheatsheet [here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet). To see, how your post content will look like, you can use online Markdown editor like [Dillinger](https://dillinger.io/).
Post must contain `title`, `date` and `details` fields.
   Post file example:
```
---
title: "Post Title"
date: "2016-11-27"
details: "Write details here if there are some or leave empty string"
---
Write main post content here
```
4. To add pictures to the post, add an image to the folder of the post

### Styles
General styles for the blog are located in `src/components/layout.css`. To add specific styles for the component [Styled components](https://www.styled-components.com/) is used.

### Code highlight
[Prism](https://prismjs.com/) is used to hightlight syntax. There are few predefined themes. To update the theme, replace `require('prismjs/themes/prism.css')` in `gatsby-browser.js` to selected one.
