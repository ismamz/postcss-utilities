# PostCSS Utility Library [![Build Status][ci-img]][ci]

<p align="center">
    <a href="http://ismamz.github.io/postcss-utilities">
        <img src="https://github.com/ismamz/postcss-utilities/blob/master/media/logo.png" alt="PostCSS Utility Library">
    </a>
</p>

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/ismamz/postcss-utilities.svg
[ci]:      https://travis-ci.org/ismamz/postcss-utilities

[postcss-utilities](http://github.io/ismamz/postcss-utilities) is a [PostCSS] plugin that have the most used mixins, shortcuts and helpers to use as native `@util` rules in yours stylesheets.

### List of Utilities

- [aspect-ratio](http://ismamz.github.io/postcss-utilities/docs#aspect-ratio)
- [center](http://ismamz.github.io/postcss-utilities/docs#center)
- [center-block](http://ismamz.github.io/postcss-utilities/docs#center-block)
- [circle](http://ismamz.github.io/postcss-utilities/docs#circle)
- [clearfix](http://ismamz.github.io/postcss-utilities/docs#clear-fix)
- [hd breakpoint](http://ismamz.github.io/postcss-utilities/docs#hd-breakpoint)
- [hide-visually](http://ismamz.github.io/postcss-utilities/docs#hide-visually)
- [hr](http://ismamz.github.io/postcss-utilities/docs#horizontal-rule)
- [hover](http://ismamz.github.io/postcss-utilities/docs#hover)
- [no-js](http://ismamz.github.io/postcss-utilities/docs#no-js)
- [reset-list](http://ismamz.github.io/postcss-utilities/docs#reset-list)
- [text-hide](http://ismamz.github.io/postcss-utilities/docs#text-hide)
- [triangle](http://ismamz.github.io/postcss-utilities/docs#triangle)
- [truncate](http://ismamz.github.io/postcss-utilities/docs#truncate)

### What is the difference with preprocessor’s mixins libraries?

- You don’t need extra files for mixins.
- You don’t need mixins for vendor prefixes (use [autoprefixer plugin](https://github.com/postcss/autoprefixer) for that)
- You can use LESS, SASS, pure CSS or whatever you want.

### [See Documentation](http://ismamz.github.io/postcss-utilities)

## Example

### Input
```css
.truncate {
    @util truncate;
    width: 500px;
}

.cfx {
    @util clearfix;
}

.box-16-9 {
    background-color: #ccc;
    margin-bottom: 20px;
    @util aspect-ratio(16:9);
}

.circle {
    @util circle(200px, red);
}
```

### Output
```css
.truncate {
    width: 500px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.cfx:after {
    content: '';
    display: block;
    clear: both;
}

.box-16-9 {
    background-color: #ccc;
    margin-bottom: 20px;
    position: relative;
    display: block;
    height: 0;
    padding: 0;
    overflow: hidden;
    padding-bottom: 56.25%;
}

.circle {
    border-radius: 50%;
    width: 200px;
    height: 200px;
    background-color: red;
}
```

## Usage

```js
postcss([ require('postcss-utilities') ])
```

See [PostCSS] docs for examples for your environment.
