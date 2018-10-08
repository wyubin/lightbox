# lightbox
## Introduction
A simple module including css to show html to upper layer by input DOM or render function.

The [Demo][] page

## Requirements
No other dependency.

And you need to require it when you use our script in browser
```html
	<link rel="stylesheet" href="./lightbox.min.css">
	<script src="./lightbox.min.js"></script>
```
## Usage
1. (Option)set up a html container(div) for lightbox. If you do not setup a div, lightbox will add a div if needed.
```html
	<div id="lightbox"></div>
```
2. show the content by input dom or a function with dom args
```js
	lightbox.set_dom(document.querySelector('#lightbox'));
	lightbox.show((dom)=>{
		dom.innerHTML = 'Show light by function';
	});
	var tdom = document.createElement('div');
	tdom.innerHTML = 'Show light by dom';
	lightbox.show(tdom);
```
## Change logs
* 0.0.1

	Initiate the project and a base function

[demo]:	http://wyubin.github.io/lightbox/index.html	"render html by light box"