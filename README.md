lintel-contrib-navbar
=====================

> Navbar for lintel.

[![npm](https://img.shields.io/npm/v/lintel-contrib-navbar.svg)](https://www.npmjs.com/package/lintel-contrib-navbar)
[![Bower](https://img.shields.io/bower/v/lintel-contrib-navbar.svg)](https://github.com/lintelio/lintel-contrib-navbar)


## Getting Started
This module requires Lintel.

If you haven't used [Lintel](http://lintel.io/) before, be sure to check out the [Getting Started](http://lintel.io/getting-started) guide, as it explains how to install and use this module. Once you're familiar with that process, you may install this module with this command:

```shell
bower install lintel-contrib-navbar --save
```

Once the module has been installed, you will have to load it in your main SASS file:

```scss
@import "bower_components/lintel-contrib-navbar/sass/navbar.scss"
```

This module also includes a JavaScript component, which you will have to load separately.

```html
<script src="bower_components/lintel-contrib-navbar/dist/navbar.min.js" type="text/javascript"></script>
```

You can use [wiredep](https://github.com/taptapship/wiredep) or [grunt-wiredep](https://github.com/stephenplusplus/grunt-wiredep) to automatically inject files in your build process.


## Variables
Check the vars file in the `sass` folder to see the full list of variables you can customize.

#### $navbar-x
Default value: `true`  

Are you using `.navbar-left` or `.navbar-right`?

#### $navbar-collapsible
Default value: `true`  

If you are using `.navbar-left` or `.navbar-right`, do you want it to expand/collapse? Automatically turns off if `$navbar-x` is `false`.

#### $navbar-scrollable
Default value: `true`  

Do you want the navbar to hide when scrolling down and show when scrolling up? JavaScript setup required.

#### $navbar-collapsed-width
Default value: `70px`  

This applies to `.navbar-left` or `.navbar-right`.

#### $navbar-expanded-width
Default value: `360px`  

This applies to `.navbar-left` or `.navbar-right`.

#### $navbar-breakpoint-min
Default value: `$screen-sm-min`  

Determines at which point navbar will collapse to mobile view.

#### $navbar-padding-y
Default value: `$cushion-y-md`  

Default padding-top and padding-bottom for various navbar elements.

#### $navbar-padding-x
Default value: `$cushion-x-md`  

Default padding-left and padding-right for various navbar elements.

#### $navbar-animate
Default value: `$animate-slow`  

Transition speed for collapsing and hiding of navbar.

#### $navbar-height
Default value: `50px`  

Height of horizontal navbar.

#### $navbar-z-index
Default value: `$z-index-xl`  

#### $navbar-title-font-size
Default value: `1em`  

#### $navbar-list-padding-y
Default value: `($navbar-height  - ($font-size-base * $line-height-base)) / 2`  

Default padding-top and padding-bottom for navbar links.

#### $navbar-list-padding-x
Default value: `$navbar-padding-x`  

Default padding-left and padding-right for navbar links.

#### $navbar-list-height
Default value: `$navbar-height`  

Height of links for vertical navbar.

#### $navbar-toggle-bar-margin-y
Default value: `4px`  

Space between bars for mobile toggle.

#### $navbar-toggle-bar-width
Default value: `4px`  

Width of bars for mobile toggle.

#### $navbar-toggle-bar-padding-y
Default value: `8px`  

Padding-top and padding-bottom of mobile toggle.

#### $navbar-toggle-bar-padding-x
Default value: `$navbar-toggle-padding-y - 1`  

Padding-left and padding-right of mobile toggle.

### Default Theme

#### $navbar-bg
Default value: `$bg-light`  

#### $navbar-bg-hover
Default value: `shade($navbar-bg, 96.66%)`  

#### $navbar-bg-active
Default value: `$navbar-bg-hover`  

#### $navbar-bg-brand
Default value: `$navbar-bg`  

#### $navbar-border
Default value: `$border-base`  

#### $navbar-border-brand
Default value: `$navbar-border`  

#### $navbar-text
Default value: `$text-base`  

#### $navbar-link
Default value: `$navbar-text`  

#### $navbar-link-hover
Default value: `$text-link`  

#### $navbar-link-active
Default value: `$navbar-link-hover`  

### Inverse Theme

#### $navbar-inverse-bg
Default value: `$gray-dark`  

#### $navbar-inverse-bg-hover
Default value: `shade($navbar-inverse-bg, 70%)`  

#### $navbar-inverse-bg-active
Default value: `$navbar-inverse-bg-hover`  

#### $navbar-inverse-bg-brand
Default value: `tint($navbar-inverse-bg, 90%)`  

#### $navbar-inverse-border
Default value: `shade($navbar-inverse-bg, 70%)`  

#### $navbar-inverse-border-brand
Default value: `shade($navbar-inverse-bg, 90%)`  

#### $navbar-inverse-text
Default value: `$text-light`  

#### $navbar-inverse-link
Default value: `$navbar-inverse-text`  

#### $navbar-inverse-link-hover
Default value: `$text-lightest`  

#### $navbar-inverse-link-active
Default value: `$navbar-inverse-link-hover`  


## Mixins
Check the mixins file in the `sass` folder to see how you can extend this module.

#### navbar-theme($bg, $border, $text)
Default $bg: `$navbar-bg`  
Default $bg-hover: `$bg`  
Default $bg-active: `$bg`  
Default $bg-brand: `$bg`  
Default $bg-brand-hover: `$bg`  
Default $border: `$navbar-border`  
Default $border-brand: `$border`  
Default $text: `$navbar-text`  
Default $link: `$navbar-link`  
Default $link-hover: `$navbar-link-hover`  
Default $link-active: `$navbar-link-active`  

Creates a new navbar theme.

```scss
.navbar {
  @include navbar-theme(
    $bg: $navbar-bg,
    $bg-hover: $bg,
    $bg-active: $bg,
    $bg-brand: $bg,
    $bg-brand-hover: $bg,
    $border: $navbar-border,
    $border-brand: $border,
    $text: $navbar-text,
    $link: $navbar-link,
    $link-hover: $navbar-link-hover,
    $link-active: $navbar-link-active
  );
}
```


## JavaScript

### Options

Name           | Type                           | Default             | Description
-------------- | -------- | ------------------- | -----------
onInit         | function                       |                     | Callback function to execute when navbar is first initialized.
scroll         | boolean  | false               | Hide/show navbar on scroll down/up.
scrollDelta    | number   | 5                   | How much to scroll before hiding/showing.
scrollTimeout  | number   | 100                 | How often to check scrolling. Bigger number = better performance but less responsive.
toggle         | boolean  | false               | Hide navbar on init.
toggleCollapse | boolean  | false               | Expand navbar on init.

### Methods

Name           | Parameters               | Description
-------------- | ------------------------ | -----------
toggle         | (options, relatedTarget) | Toggle navbar. If provided, a related target will be available when events fire.
toggleCollapse | (options, relatedTarget) | Toggle collapse/expand view (for vertical navbars). If provided, a related target will be available when events fire.


### Events

Event                 | Description
--------------------- | ------------------------------
show.lt.navbar        | Fires immediately before navbar is shown. Can prevent navbar from showing here. 
shown.lt.navbar       | Fires immediately after navbar is shown.
hide.lt.navbar        | Fires immediately before navbar is hidden. Can prevent navbar from hiding here.
hidden.lt.navbar      | Fires immediately after navbar is hidden.
expand.lt.navbar      | Fires immediately before navbar is expanded. Can prevent navbar from expanding here. 
expanded.lt.navbar    | Fires immediately after navbar is expanded.
collapse.lt.navbar    | Fires immediately before navbar is collapsed. Can prevent navbar from collapsing here.
collapsed.lt.navbar   | Fires immediately after navbar is collapsed.


### Data-attr
Add `data-toggle="navbar"` and `data-target="#selector"` to a button/element to toggle navbar on mobile screens. If the button is inside the navbar, it does not need the `data-target` attribute.

```html
<nav class="navbar navbar-top navbar-fixed navbar-mobile">
  <div class="navbar-brand">
    <a href="#" class="navbar-toggle" data-toggle="navbar" data-target="#navbar" aria-label="Open main menu">
      <div class="navbar-toggle-bar" aria-hidden="true"></div>
    </a>
    <a href="/" class="navbar-brand-link">
      ...
    </a>
  </div>
</nav>
<nav class="navbar navbar-top navbar-fixed" id="navbar">
  ...
</nav>
```

### jQuery
Call the jQuery plugin on the navbar, passing in any options and the related target (button).

```js
$('#navbar').navbar({
  scroll: true
}, $('.navbar-mobile').find('[data-toggle="navbar"]'));
```


## Examples

#### Basic Navbar
```html
<nav class="navbar">...</nav>
```

#### Navbar Brand
```html
<nav class="navbar navbar-top navbar-fixed">
  <div class="navbar-brand">
    <a href="#" class="navbar-toggle" data-toggle="navbar" aria-label="Close main menu">
      <div class="navbar-toggle-bar" aria-hidden="true"></div>
    </a>
    <a href="/" class="navbar-brand-link">
      <h1 class="navbar-title visible-sr">Lintel</h1>
      <img class="navbar-logo" src="http://placehold.it/100x35" alt="Logo">
    </a>
  </div>
  ...
</nav>
```

#### Navbar List
```html
<nav class="navbar">
  <div class="navbar-brand">...</div>
  <ul class="navbar-list">
    <li>
      <a href="#">Home</a>
    </li>
    <li class="active">
      <a href="#">Profile</a>
    </li>
    <li class="btn-group">
      <a href="#" data-toggle="dropdown" type="button" aria-expanded="false">
        Dropdown
        <span class="btn-caret" aria-hidden="true"></span>
      </a>
      <ul class="dropdown navbar-dropdown" role="menu">
        <li><a href="#">Action 1</a></li>
        <li><a href="#">Action 2</a></li>
        <li><a href="#">Action 3</a></li>
      </ul>
    </li>
  </ul>
</nav>
```

#### Navbar List Right
```html
<ul class="navbar-list navbar-list-right">
```

#### Navbar Fixed Top
```html
<nav class="navbar navbar-fixed navbar-top">...</nav>
```

#### Navbar Fixed Left
```html
<nav class="navbar navbar-left">...</nav>
```

#### Vertical Navbar List Tooltips
```html
<nav class="navbar navbar-left">
  ...
  <ul class="navbar-list">
    <li>
      <a href="#">
        <i class="fa fa-home navbar-list-icon" aria-hidden="true"></i> <span class="navbar-tooltip">Home</span>
      </a>
    </li>
  </ul>
</nav>
```

#### Mobile Navbar
```html
<nav class="navbar navbar-top navbar-fixed navbar-mobile">
  <div class="navbar-brand">
    <a href="#" class="navbar-toggle" data-toggle="navbar" aria-label="Open main menu">
      <div class="navbar-toggle-bar" aria-hidden="true"></div>
    </a>
    <a href="/" class="navbar-brand-link">
      <h1 class="navbar-title">Lintel</h1>
      <img class="navbar-logo" src="http://placehold.it/100x35" alt="Logo">
    </a>
  </div>
</nav>
```

#### Complete Horizontal Example
```html
<nav class="navbar navbar-top navbar-fixed navbar-mobile">
  <div class="navbar-brand">
    <a href="#" class="navbar-toggle" data-toggle="navbar" aria-label="Open main menu">
      <div class="navbar-toggle-bar" aria-hidden="true"></div>
    </a>
    <a href="/" class="navbar-brand-link">
      <h1 class="navbar-title">Lintel</h1>
      <img class="navbar-logo" src="http://placehold.it/100x35" alt="Logo">
    </a>
  </div>
</nav>

<nav class="navbar navbar-top navbar-fixed">
  <div class="navbar-brand">
    <a href="#" class="navbar-toggle" data-toggle="navbar" aria-label="Close main menu">
      <div class="navbar-toggle-bar" aria-hidden="true"></div>
    </a>
    <a href="/" class="navbar-brand-link">
      <h1 class="navbar-title visible-sr">Lintel</h1>
      <img class="navbar-logo" src="http://placehold.it/100x35" alt="Logo">
    </a>
  </div>
  <ul class="navbar-list">
    <li>
      <a href="#">Home</a>
    </li>
    <li class="active">
      <a href="#">Profile</a>
    </li>
    <li class="btn-group">
      <a href="#" data-toggle="dropdown" type="button" aria-expanded="false">
        Dropdown
        <span class="btn-caret" aria-hidden="true"></span>
      </a>
      <ul class="dropdown navbar-dropdown" role="menu">
        <li><a href="#">Action 1</a></li>
        <li><a href="#">Action 2</a></li>
        <li><a href="#">Action 3</a></li>
      </ul>
    </li>
  </ul>
  <ul class="navbar-list navbar-list-right">
    <li>
      <a href="#" class="btn btn-success btn-sm">Sign Up</a>
    </li>
    <li>
      <a href="#">Log In</a>
    </li>
  </ul>
</nav>
```

#### Complete Vertical Example
```html
<nav class="navbar navbar-inverse navbar-left navbar-mobile">
  <div class="navbar-brand">
    <a href="#" class="navbar-toggle" data-toggle="navbar" aria-label="Open main menu">
      <div class="navbar-toggle-bar" aria-hidden="true"></div>
    </a>
    <a href="/" class="navbar-brand-link">
      <h1 class="navbar-title">Lintel</h1>
      <img class="navbar-logo" src="http://placehold.it/100x35" alt="Logo">
    </a>
  </div>
</nav>

<nav class="navbar navbar-inverse navbar-left" id="navbar">
  <div class="navbar-brand">
    <a href="#" class="navbar-toggle" aria-label="Close main menu">
      <div class="navbar-toggle-bar" aria-hidden="true"></div>
    </a>
    <a href="/" class="navbar-brand-link">
      <h1 class="navbar-title navbar-tooltip">Lintel</h1>
      <img class="navbar-logo" src="http://placehold.it/44x40" alt="Logo">
    </a>
  </div>
  <ul class="navbar-list">
    <li>
      <a href="#">
        <i class="fa fa-home navbar-list-icon" aria-hidden="true"></i> <span class="navbar-tooltip">Home</span>
      </a>
    </li>
    <li class="active">
      <a href="#">
        <i class="fa fa-user navbar-list-icon" aria-hidden="true"></i> <span class="navbar-tooltip">Profile</span>
      </a>
    </li>
    <li class="btn-group">
      <a href="#" data-toggle="dropdown" type="button" aria-expanded="false">
        <i class="fa fa-tasks navbar-list-icon" aria-hidden="true"></i> <span class="navbar-tooltip">Dropdown <span class="btn-caret" aria-hidden="true"></span></span>
      </a>
      <ul class="dropdown navbar-dropdown" role="menu">
        <li><a href="#">Action 1</a></li>
        <li><a href="#">Action 2</a></li>
        <li><a href="#">Action 3</a></li>
      </ul>
    </li>
  </ul>
  <ul class="navbar-list navbar-list-right">
    <li>
      <a href="#">
        <i class="fa fa-sign-in navbar-list-icon" aria-hidden="true"></i> <span class="navbar-tooltip">Log In</span>
      </a>
    </li>
    <li>
      <a href="#" data-toggle="navbar-collapse">
        <i class="fa fa-arrow-right navbar-list-icon" aria-hidden="true"></i>
      </a>
    </li>
  </ul>
</nav>
```


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).


## License
Copyright (c) 2015 Marius Craciunoiu. Licensed under the MIT license.
