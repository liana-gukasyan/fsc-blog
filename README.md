[![Foo](https://www.firststepcoding.com/static/media/fsc_logo.c94f17b9.png)](https://www.firststepcoding.com)

# [Gatsby's](https://www.gatsbyjs.org) based First Step Coding blog

## Install dependencies
```npm i```

## Usage

### Blog posts content
#### To add new post:
1. Create new folder in `src/blog-posts` with date and title
2. Add markdown file named `index` to created folder
3. You can find Markdown Cheatsheet [here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet). To see, how your post content will look like, you can use online Markdown editor like [Dillinger](https://dillinger.io/).
Add the content to the file as follows:
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
Basic styles for the blog are located in `src/components/layout.css`. To add specific styles for the component [Styled components](https://www.styled-components.com/) is used.
